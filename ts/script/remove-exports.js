#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"),
);
delete packageJson.exports;
fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2),
);
