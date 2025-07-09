import * as esbuild from 'esbuild';
import packageDetails from './package.json' with { type: 'json' };

/**
 * @type {esbuild.BuildOptions}
 * @param {esbuild.BuildOptions} config
 */
const baseConfig = (config) => ({
  ...config,
  entryPoints: [
    'src/sdk/nodejs/createProviderSDK.ts',
    'src/sdk/nodejs/createChainNodeSDK.ts',
    'src/auth/certificates/index.ts',
    'src/sdl/index.ts',
  ],
  bundle: true,
  sourcemap: true,
  external: Object.keys(packageDetails.dependencies),
});

/**
 * @type {esbuild.BuildOptions}
 * @param {esbuild.BuildOptions['format']} format
 */
const nodeJsConfig = (format) => baseConfig({
  minify: false,
  target: [`node${packageDetails.engines.node}`],
  format,
  splitting: format === 'esm',
  platform: 'node',
  outdir: `dist/nodejs/${format}`,
});

await Promise.all([
  esbuild.build(nodeJsConfig('esm')),
  esbuild.build(nodeJsConfig('cjs')),
]);
console.log('Building Nodejs SDK finished');
