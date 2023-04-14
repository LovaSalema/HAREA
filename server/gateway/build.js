const { esbuild } = require('@mzara/config')
esbuild({
    entryPoints: ['./src/Bootstrap'],
    plugins: [],
    banner: {},
    splitting: false,
    minify: false,
    sourcemap: false,
    keepNames: true,
    format: 'cjs',
})
