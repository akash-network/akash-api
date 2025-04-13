import { describe, expect, it } from "@jest/globals";
import { exec } from "child_process";
import { access, readFile, rmdir, constants as fsConst } from "fs/promises";
import { tmpdir } from "os";
import { join as joinPath } from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

describe("protoc-gen-known-customtype-types plugin", () => {
  const config = {
    version: "v2",
    clean: true,
    plugins: [
      {
        local: "ts/script/protoc-gen-known-customtype-types.ts",
        strategy: "all",
        out: ".",
        opt: [
          "target=ts",
        ],
      },
    ],
  };

  it("generates `Set` instance with all the types that have reference to fields with custom type option", async () => {
    const outputDir = joinPath(tmpdir(), `ts-bufplugin-${process.pid.toString()}`);
    const protoDir = './ts/test/functional/proto';
    const command = [
      `buf generate`,
      `--config '${JSON.stringify({
        version: 'v2',
        modules: [
          { path: 'go/vendor/github.com/cosmos/gogoproto' },
          { path: './ts/test/functional/proto'}
        ]
      })}'`,
      `--template '${JSON.stringify(config)}'`,
      `-o '${outputDir}'`,
      `--path ${protoDir}/customtype.proto`,
      protoDir,
    ].join(' ');

    try {
      await execAsync(command, {
        cwd: joinPath(__dirname, "..", "..", ".."),
        env: {
          ...process.env,
          BUF_PLUGIN_KNOWN_CUSTOMTYPE_TYPES_OUTPUT_FILE: "typesWithCustomTypes.ts",
        },
      });

      expect(await readFile(joinPath(outputDir, "typesWithCustomTypes.ts"), "utf-8")).toMatchSnapshot();
    } finally {
      if (await access(outputDir, fsConst.W_OK).catch(() => false)) {
        await rmdir(outputDir, { recursive: true });
      }
    }
  });
});
