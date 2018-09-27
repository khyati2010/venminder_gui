'use strict';
const fs = require('fs');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    allScriptsTimeout: 360000,
    specs: [
        './e2e/com.venminder.specs/*.ts'
    ],

    exclude: [],
    multiCapabilities: [{
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions', 'disable-infobars']
        }
    }],
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    },

    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(60000);

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'Report/AllureReport/allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        // jasmine.getEnv().addReporter(new SpecReporter());
        // jasmine.getEnv().addReporter(
        //     new Jasmine2HtmlReporter({
        //         savePath: 'Report'
        //     })
        // )
    }
};