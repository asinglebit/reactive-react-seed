const common = require('./karma.common.config.js')

common.browsers = ['PhantomJS', 'Chrome', 'Firefox'];
common.reporters = ['mocha', 'html', 'coverage'];
common.autoWatch = false;
common.singleRun = true;

common.htmlReporter = {
    outputDir: 'reports/spec/',
    templatePath: null,
    focusOnFailures: true,
    namedFiles: true,
    pageTitle: null,
    urlFriendlyName: false,
    preserveDescribeNesting: false,
    foldAll: false
};

common.coverageReporter = {
    reporters: [{
        type: 'html',
        dir: '../reports/coverage/'
    }, {
        type: 'text-summary'
    }, {
        type: 'text'
    }]
};

module.exports = function(config) {
    config.set(common)
};
