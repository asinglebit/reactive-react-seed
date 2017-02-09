exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:3000',
    specs: ['../e2e/**/*.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        const width = 2250;
        const height = 1200;
        browser.driver.manage().window().setSize(width, height);
        require('babel-register');
        require('./protractor.setup');
    },
    mochaOpts: {
        enableTimeouts: false,
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            reportDir: 'reports/e2e/',
            reportName: 'TestExecutionReport',
            reportTitle: 'Sample Reports',
            takePassedScreenshot: true,
            clearOldScreenshots: true
        }
    },
    allScriptsTimeout: 15000
}
