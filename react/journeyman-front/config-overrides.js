const tsLoader = require('ts-loader')
var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist/scripts'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: tsLoader
        }]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx']
    },
};


module.exports = function override(config, env) {
    console.log(path.resolve(__dirname, './dist/scripts'));
    console.log('aaa');
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        loader: require.resolve('ts-loader'),
    })

    config.output = {
        path: path.resolve(__dirname, './dist/scripts'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    }

    return config;
}