#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const staticExports = require("../static-exports.json");

const distDir = path.resolve(__dirname, "../dist/generated");
const files = fs.readdirSync(distDir);
const paths = files.reduce((acc, file) => {
  const match = file.match(/index.(.*)\.d\.ts/);

  if (match) {
    const dottedPath = match[1];
    const slashedPath = dottedPath.replace(/\./g, "/");
    const resolvedPath = fs.existsSync(`./dist/patch/index.${dottedPath}.js`)
      ? `./dist/patch/index.${dottedPath}`
      : `./dist/generated/index.${dottedPath}`;

    acc.tsconfig[`@akashnetwork/akash-api/${slashedPath}`] = [resolvedPath];
    acc.package[`./${slashedPath}`] = `${resolvedPath}.js`;
  }

  return acc;
}, staticExports);

const tsconfigPaths = path.resolve(__dirname, "../tsconfig.paths.json");
fs.writeFileSync(
  tsconfigPaths,
  JSON.stringify({ compilerOptions: { paths: paths.tsconfig } }, null, 2),
);

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"),
);
packageJson.exports = paths.package;
fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2),
);
