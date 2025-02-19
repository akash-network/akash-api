import { describe, expect, it } from "@jest/globals";
import { exec } from "child_process";
import { readFile, rmdir } from "fs/promises";
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
        local: "bin/protoc-sdk-object.ts",
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
    const command = `buf generate --template '${JSON.stringify(config)}' -o '${outputDir}' ./test/functional/proto`;

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
      await rmdir(outputDir, { recursive: true });
    }
  });
});
