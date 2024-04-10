#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'),
);
delete packageJson.exports;
fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(packageJson, null, 2),
);
