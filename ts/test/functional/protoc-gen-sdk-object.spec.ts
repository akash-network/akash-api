import { describe, expect, it } from "@jest/globals";
import { exec } from "child_process";
import { access, constants as fsConst, readFile, rmdir } from "fs/promises";
import { tmpdir } from "os";
import { join as joinPath } from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

describe("protoc-sdk-objec plugin", () => {
  const config = {
    version: "v2",
    clean: true,
    plugins: [
      {
        local: "script/protoc-gen-sdk-object.ts",
        strategy: "all",
        out: ".",
        opt: [
          "target=ts",
        ],
      },
    ],
  };

  it("generates SDK object from proto files", async () => {
    const outputDir = joinPath(tmpdir(), `ts-bufplugin-${process.pid.toString()}`);
    const protoDir = "./test/functional/proto";
    const command = [
      `buf generate`,
      `--template '${JSON.stringify(config)}'`,
      `-o '${outputDir}'`,
      `--path ${protoDir}/msg.proto`,
      `--path ${protoDir}/query.proto`,
      protoDir,
    ].join(" ");

    try {
      await execAsync(command, {
        cwd: joinPath(__dirname, "..", ".."),
        env: {
          ...process.env,
          BUF_PLUGIN_SDK_OBJECT_OUTPUT_FILE: "sdk.ts",
        },
      });

      expect(await readFile(joinPath(outputDir, "sdk.ts"), "utf-8")).toMatchSnapshot();
    } finally {
      if (await access(outputDir, fsConst.W_OK).catch(() => false)) {
        await rmdir(outputDir, { recursive: true });
      }
    }
  });
});
