export const config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/**/*.spec.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Pixel',
        'appium:platformVersion': '11.0',
        // Add your app path here:
        // 'appium:app': './path/to/your/app.apk',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
