import type { DescField, DescMessage } from "@bufbuild/protobuf";
import { create, ScalarType } from "@bufbuild/protobuf";
import { faker } from "@faker-js/faker";

import { encodeBinary } from "../../src/encoding/binaryEncoding.ts";
import { getCustomType } from "../../src/encoding/customTypes/utils.ts";

export function generateMessage(schema: DescMessage, messageToFields: Record<string, { fields: string[] }>) {
  const attrs = messageToFields[schema.typeName]?.fields.reduce<Record<string, unknown>>((acc, field) => {
    acc[field] = generateField(schema.field[field], messageToFields);
    return acc;
  }, {});

  return create(schema, attrs);
}

function generateField(field: DescField, messageToFields: Record<string, { fields: string[] }>) {
  switch (field.fieldKind) {
    case "scalar":
      return generateScalar(field, field.scalar);
    case "enum":
      return faker.number.int({ min: 0, max: field.enum.values.length - 1 });
    case "message":
      return generateMessage(field.message!, messageToFields);
    case "list":
      return Array.from({ length: faker.number.int({ min: 0, max: 10 }) }, () => generateMessage(field.message!, messageToFields));
    case "map":
      return Array.from({ length: faker.number.int({ min: 0, max: 10 }) }).reduce<Record<PropertyKey, unknown>>((map) => {
        const key = generateScalar(field, field.mapKey);
        map[key as string] = generateMessage(field.message!, messageToFields);
        return map;
      }, {});
    default:
      throw new Error(`Unknown field kind: ${field["fieldKind"]}`);
  }
}

function generateScalar(field: DescField, scalarType: ScalarType) {
  switch (scalarType) {
    case ScalarType.STRING:
      return guessFakeValue(field);
    case ScalarType.BYTES:
      return encodeBinary(String(guessFakeValue(field)));
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.INT32:
      return faker.number.int({ min: -1000000, max: 1000000 });
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
    case ScalarType.INT64:
      return faker.number.bigInt({ min: -1000000000n, max: 100000000000n });
    case ScalarType.UINT32:
      return faker.number.int({ min: 0, max: 1000000 });
    case ScalarType.UINT64:
      return faker.number.bigInt({ min: 0, max: 1000000n });
    case ScalarType.FLOAT:
      return faker.number.float({ min: -1000000, max: 1000000 });
    case ScalarType.DOUBLE:
      return faker.number.float({ min: -1000000, max: 1000000 });
    case ScalarType.BOOL:
      return faker.datatype.boolean();
    default:
      throw new Error(`Unknown scalar type: ${field.scalar}`);
  }
}

function guessFakeValue(field: DescField): unknown {
  const lowerName = field.name.toLowerCase();

  if (getCustomType(field)) return guessFakeValueForCustomType(getCustomType(field)?.shortName);
  if (lowerName.includes("name")) return faker.person.fullName();
  if (lowerName.includes("first")) return faker.person.firstName();
  if (lowerName.includes("last")) return faker.person.lastName();
  if (lowerName.includes("email")) return faker.internet.email();
  if (lowerName.includes("phone")) return faker.phone.number();
  if (lowerName.includes("address")) return faker.location.streetAddress();
  if (lowerName.includes("city")) return faker.location.city();
  if (lowerName.includes("zip") || lowerName.includes("postal")) return faker.location.zipCode();
  if (lowerName.includes("country")) return faker.location.country();
  if (lowerName.includes("date")) return faker.date.past().toISOString();
  if (lowerName.includes("id")) return faker.string.uuid();
  if (lowerName.includes("username")) return faker.internet.userName();
  if (lowerName.includes("password")) return faker.internet.password();
  if (lowerName.includes("avatar")) return faker.image.avatar();
  if (lowerName.includes("denom")) return "uakt";
  if (lowerName.includes("amount") || lowerName.includes("commission") || lowerName.includes("price") || lowerName.includes("rate")) {
    return faker.number.float({ min: 0, max: 1000000 }).toString();
  }

  return faker.lorem.word();
}

function guessFakeValueForCustomType(shortName: string | undefined) {
  switch (shortName) {
    case "Dec":
      return faker.number.float({ min: 0, max: 1000000 }).toString();
    default:
      return faker.lorem.word();
  }
}
