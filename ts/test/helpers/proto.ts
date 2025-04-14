import { AnyDesc, DescFile, Message } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import assert from "assert";
import { exec } from "child_process";
import { createHash } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { join as joinPath, relative as relativePath } from "path";
import { promisify } from "util";

const execAsync = promisify(exec);
const PWD = joinPath(__dirname, "..", "..", "..");

const cache: Record<string, DescFileDefinition> = Object.create(null);
export async function proto(strings: TemplateStringsArray): Promise<DescFileDefinition> {
  const content = strings.join("");
  const fileContent = [
    "syntax = \"proto3\";",
    "package akash.test.unit;",
    content,
  ].join("\n");
  const hash = createHash("sha256").update(fileContent).digest("hex");
  if (cache[hash]) return cache[hash];

  const baseDir = joinPath(PWD, "ts", "node_modules", ".tmp", "akash");
  const outputDir = joinPath(baseDir, "generated");
  const protoDir = joinPath(baseDir, "proto");
  const filePath = joinPath(protoDir, `${hash}.proto`);
  await mkdir(protoDir, { recursive: true });
  await writeFile(filePath, fileContent);

  const command = [
    `buf generate`,
    `--config '${JSON.stringify({
      version: "v2",
      modules: [
        { path: "go/vendor/github.com/cosmos/gogoproto" },
        { path: relativePath(PWD, protoDir) },
      ],
    })}'`,
    `--template '${JSON.stringify({
      version: "v2",
      plugins: [
        {
          local: "protoc-gen-es",
          strategy: "all",
          out: ".",
          include_imports: true,
          opt: [
            "target=js",
            "js_import_style=legacy_commonjs",
          ],
        },
      ],
    })}'`,
    `-o '${outputDir}'`,
    `--path '${filePath}'`,
    relativePath(PWD, protoDir),
  ].join(" ");

  await execAsync(command, {
    cwd: PWD,
    env: process.env,
  });

  const module = await import(joinPath(outputDir, `${hash}_pb`)) as Record<string, AnyDesc>;
  cache[hash] = new DescFileDefinition(Object.values(module).find((value) => value?.kind === "file")!);

  return cache[hash];
}

class DescFileDefinition {
  constructor(public readonly file: DescFile) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getMessage<Type extends string, TShape = Record<string, any>>(name: Type): GenMessage<Message<`package akash.test.unit.${Type}`> & TShape> {
    const message = this.file.messages.find((message) => message.name === name);
    assert(message, `Message with name ${name} not found in this proto file`);
    return message as GenMessage<Message<`package akash.test.unit.${Type}`> & TShape>;
  }
}
