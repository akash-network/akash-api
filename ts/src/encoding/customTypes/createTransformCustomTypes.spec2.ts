import { create, DescMessage, fromJson, toJson } from "@bufbuild/protobuf";
import { afterEach, describe, expect, fit, it, jest, xdescribe, xit } from "@jest/globals";
import { proto } from "@test/helpers/proto";

import { createTransformCustomTypes } from "./createTransformCustomTypes";
import { customTypes } from "./registry";
import { findPathsToCustomField } from "./utils";

xdescribe("transformCustomTypes", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    findPathsToCustomField.clearCache();
  });

  it("does not change message if it does not have refs to custom types", async () => {
    const def = await proto`
      message Pet {
        string name = 1;
      }
    `;
    const schema = def.getMessage("Pet");
    const message = create(schema, { name: "Tail" });
    const transformCustomTypes = createTransformCustomTypes(() => false);
    const transformed = transformCustomTypes("encode", schema, message);

    expect(transformed).toEqual(message);
  });

  it("throws exception if it expects schema to have custom types but it does not have", async () => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message Pet {
        string name = 1;
      }

      message Dog {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        string name = 2;
      }
    `;
    const pet = create(def.getMessage("Pet"), { name: "Tail" });
    const dog = create(def.getMessage("Dog"), { name: "Tail", id: new Uint8Array([49]) });
    const transformCustomTypes = createTransformCustomTypes(() => true);

    expect(() => transformCustomTypes("encode", def.getMessage("Pet"), pet)).toThrow(/to have fields with custom types but could not find paths to them/);
    expect(() => transformCustomTypes("encode", def.getMessage("Dog"), dog)).toThrow(/to have fields with custom types but could not find paths to them/);
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom type value", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message Dog {
        string price = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
        string name = 2;
      }
    `;
    const price = "2";
    const message = create(def.getMessage("Dog"), { name: "Tail", price });
    jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);

    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("Dog"), message);

    expect(customTypes.Dec[transformType]).toHaveBeenCalledWith(price);
    expect(encodedMessage).toEqual({
      ...message,
      price: transformType,
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in nested messages", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        Dog pet = 2;
      }

      message Dog {
        string name = 2;
        string price = 3 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }
    `;

    const price = "2" + "0".repeat(18);
    const owner = create(def.getMessage("PetOwner"), {
      pet: {
        name: "Tail",
        price,
      },
    });
    jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);

    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), owner);

    expect(customTypes.Dec[transformType]).toHaveBeenCalledWith(price);
    expect(encodedMessage).toEqual({
      ...owner,
      pet: {
        ...owner.pet,
        price: transformType,
      },
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in oneof group", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        Pet pet = 2;
      }

      message Pet {
        oneof value {
          Dog dog = 2;
          Cat cat = 3;
        }
      }

      message Dog {
        string name = 2;
        string price = 3 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }

      message Cat {
        string name = 2;
        string price = 3;
      }
    `;

    const price = "2";
    const message = fromJson(def.getMessage("PetOwner"), {
      pet: {
        dog: {
          name: "Tail",
          price,
        },
      },
    });
    jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);

    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), message);

    expect(customTypes.Dec[transformType]).toHaveBeenCalledWith(price);
    expect(encodedMessage).toEqual({
      ...message,
      pet: {
        ...message.pet,
        value: {
          ...message.pet.value,
          value: {
            ...message.pet.value.value,
            price: transformType,
          },
        },
      },
    });
  });

  fit.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in repeated \"oneof\" keyword", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        repeated Pet pets = 2;
      }

      message Pet {
        oneof value {
          Dog dog_me = 2;
          Cat cat = 3;
        }
      }

      message Dog {
        string name = 2;
        string price = 3 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }

      message Cat {
        string name2 = 2;
        string price = 3;
      }
    `;

    const message = fromJson(def.getMessage("PetOwner"), {
      pets: [
        {
          dog_me: {
            name: "Tail",
            price: "1",
          },
        },
        {
          cat: {
            name2: "Simba",
            price: "2",
          },
        },
        {
          dog_me: {
            name: "Rex",
            price: "3",
          },
        },
      ],
    });
    const spy = jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);
    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), message);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith("1");
    expect(spy).toHaveBeenCalledWith("3");
    expect(encodedMessage).toEqual({
      ...message,
      pets: message.pets.map((pet: any) => ({
        ...pet,
        value: {
          ...pet.value,
          value: {
            ...pet.value.value,
            price: pet.$typeName.endsWith("Dog") ? transformType : pet.value.value.price,
          },
        },
      })),
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in nested repeated message paths", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        repeated Dog pets = 2;
      }

      message Dog {
        string name = 2;
        string price = 3 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }
    `;
    const message = fromJson(def.getMessage("PetOwner"), {
      pets: [
        {
          name: "Tail",
          price: "1",
        },
        {
          name: "Simba",
          price: "2",
        },
        {
          name: "Rex",
          price: "3",
        },
      ],
    });
    const spy = jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);
    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), message);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(encodedMessage).toEqual({
      ...message,
      pets: message.pets.map((pet: any) => ({
        ...pet,
        price: transformType,
      })),
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in map values", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetClub {
        map<string, PetOwner> ownerToPet = 1;
      }

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        Pet pet = 2;
      }

      message Pet {
        string name = 2;
        string price = 3 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }
    `;

    const message = fromJson(def.getMessage("PetClub"), {
      ownerToPet: {
        owner1: {
          pet: {
            name: "Tail",
            price: "1",
          },
        },
        owner2: {
          pet: {
            name: "Simba",
            price: "2",
          },
        },
      },
    });
    const spy = jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);
    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetClub"), message);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(encodedMessage).toEqual({
      ...message,
      ownerToPet: Object.keys(message.ownerToPet).reduce((acc, key) => {
        acc[key] = {
          ...message.ownerToPet[key],
          pet: {
            ...message.ownerToPet[key].pet,
            price: transformType,
          },
        };
        return acc;
      }, {} as Record<string, any>),
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in cyclic refs", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        repeated Pet pets = 1;
        string cash = 2 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }

      message Pet {
        string name = 1;
        string price = 2 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
        PetOwner owner = 3;
      }
    `;

    const message = fromJson(def.getMessage("PetOwner"), {
      pets: [
        {
          name: "Tail",
          price: "1",
        },
        {
          name: "Simba",
          price: "2",
        },
      ],
      cash: "100",
    });

    const spy = jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);
    const transformCustomTypes = createTransformCustomTypes(() => true);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), message);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(encodedMessage).toEqual({
      ...message,
      pets: message.pets.map((pet: any) => ({
        ...pet,
        price: transformType,
      })),
      cash: transformType,
    });
  });

  it.each([
    ["encode" as const],
    ["decode" as const],
  ])("can %s custom types in messages that pass guard", async (transformType) => {
    const def = await proto`
      import "gogoproto/gogo.proto";

      message PetOwner {
        bytes id = 1 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"
        ];
        Pet pet = 2;
        Money cash = 3;
      }

      message Pet {
        oneof value {
          Dog dog = 2;
          Cat cat = 3;
        }
      }

      message PetClub {
        repeated PetOwner members = 1;
        repeated Dog all_dogs = 3;
        map<string, Dog> ownerIdToDog = 4;
      }

      message PetClubItemsQueryResponse {
        repeated PetClub items = 1;
      }

      message Dog {
        string name = 1;
        string price = 2 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }

      message Cat {
        string name = 1;
      }

      message Money {
        string currency = 1;
        string amount = 2 [
          (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"
        ];
      }
    `;
    const hasCustomTypeRef = (typeName: string) => typeName.endsWith(".Money") || typeName.endsWith(".PetOwner");
    const transformCustomTypes = createTransformCustomTypes(hasCustomTypeRef);
    const message = fromJson(def.getMessage("PetOwner"), {
      pet: {
        dog: {
          name: "Tail",
          price: "1",
        },
      },
      cash: {
        currency: "USD",
        amount: "100",
      },
    });
    const spy = jest.spyOn(customTypes.Dec, transformType).mockReturnValue(transformType);
    const encodedMessage = transformCustomTypes(transformType, def.getMessage("PetOwner"), message);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(encodedMessage).toEqual({
      ...message,
      cash: {
        ...message.cash,
        amount: transformType,
      },
    });
  });
});
