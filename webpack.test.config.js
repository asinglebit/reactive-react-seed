/**
 * Exporting configuration
 */

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            enforce: 'pre'
        }, {
            test: /\.scss$/,
            loader: 'null-loader',
            enforce: 'pre'
        }, {
            test: /\.js$/,
            exclude: /(test|node_modules)\//,
            loader: 'istanbul-instrumenter-loader',
            query: {
                esModules: true
            },
            enforce: 'post'
        }]
    }
};
