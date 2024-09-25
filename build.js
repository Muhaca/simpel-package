const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

const buildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    format: 'esm',
    minify: true,
    sourcemap: true,
    plugins: [cssModulesPlugin()],
    external: ['react', 'react-dom'],
};

const runBuild = async () => {
    const ctx = await esbuild.build({
        ...buildOptions,
        watch: {
            onRebuild(error, result) {
                if (error) {
                    console.error('Build failed:', error);
                } else {
                    console.log('Build succeeded:', result);
                }
            },
        },
    });
    console.log('Watching for changes...');
};

if (process.argv.includes('--watch')) {
    runBuild();
} else {
    esbuild.build(buildOptions).catch(() => process.exit(1));
}
