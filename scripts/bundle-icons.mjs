/**
 * Bundle Font Awesome icons into a single browser-compatible JS file.
 * Run: node scripts/bundle-icons.mjs
 */
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/js/icons.js'],
  outfile: 'src/js/icons.bundle.js',
  bundle: true,
  minify: true,
  target: ['es2020'],
  format: 'iife',           // Wraps in IIFE, no module environment needed
  globalName: 'faIcons',    // unused in IIFE but required
  logLevel: 'info',
});
