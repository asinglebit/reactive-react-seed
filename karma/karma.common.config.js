const webpackConfig = require('../webpack.test.config.js')

module.exports = {
    basePath: '',
    frameworks: ['mocha', 'sinon', 'chai'],
    client: {
        chai: {
            includeStack: true
        }
    },
    files: [
        '../src/**/*.spec.js'
    ],
    preprocessors: {
        '../src/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    port: 8090,
    colors: true,
    concurrency: Infinity,
    phantomjsLauncher: {
        exitOnResourceError: true
    },
    options: {
        windowName: 'Reactive React Seed - Tests',
        settings: {
            webSecurityEnabled: false
        }
    }
};
