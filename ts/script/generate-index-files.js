#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");

async function getAllPaths(dir) {
  let results = [];

  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subEntries = await getAllPaths(fullPath);
      results = results.concat(subEntries);
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

const EXCLUSIONS = ["genesis", "params", "service", "query"];

(async () => {
  const directory = path.resolve(__dirname, "../src/generated");
  const allPaths = await getAllPaths(directory);
  const root = `${process.cwd()}/ts/src/generated/`;
  const nsWithExports = allPaths
    .filter((path) => !path.endsWith("d.ts") && path.endsWith(".ts"))
    .reduce((acc, path) => {
      const relativePath = path.replace(root, "").replace(".ts", "");
      const pathParts = relativePath.split("/");
      const [fileName] = pathParts.splice(pathParts.length - 1, 1);

      const ns = pathParts.join(".");

      if (!ns || !ns.includes("akash")) {
        return acc;
      }

      if (!acc[ns]) {
        acc[ns] = [];
      }

      acc[ns].push(relativePath);

      const version = pathParts[pathParts.length - 1];

      if (EXCLUSIONS.includes(fileName)) {
        return acc;
      }

      if (!acc[version]) {
        acc[version] = [];
      }

      acc[version].push(relativePath);

      return acc;
    }, {});

  const namespaces = Object.keys(nsWithExports);

  namespaces.forEach((ns) => {
    const nsExports = nsWithExports[ns];
    const content = nsExports.reduce((acc, file) => {
      return `${acc}export * from "./${file}";\n`;
    }, "");

    fs.writeFile(
      path.resolve(__dirname, `../src/generated/index.${ns}.ts`),
      content,
      "utf8",
    );
  });
})();
