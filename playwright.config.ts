import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./global-setup'),
    timeout: 600000,
    retries: 0,
    fullyParallel: true,
    workers: 2,
    use: {
        baseURL: process.env.BASE_URL,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        viewport: {
            width: 1920,
            height: 1080
        },
        headless: true,
        actionTimeout: 30000
    },
    reporter: [['list'], ['allure-playwright']],
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium'
            }
        }
    ]
}

export default config
