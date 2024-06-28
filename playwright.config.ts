import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup'),
  timeout: 600000,
  retries: 0,
  fullyParallel: true,
  workers: process.env.CI ? 4 : 1,
  use: {
    baseURL:
      process.env.BASE_URL || 'https://ecommerce-playground.lambdatest.io',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: {
      width: 1920,
      height: 1080,
    },
    headless: true,
    actionTimeout: 30000,
  },
  reporter: [
    ['allure-playwright'],
    [
      'playwright-prometheus-remote-write-reporter',
      {
        serverUrl: process.env.CI
          ? 'http://localhost:9090/api/v1/write'
          : 'http://localhost:9090/api/v1/write',
        prefix: 'playwright_',
      },
    ],
    ['@estruyf/github-actions-reporter'],
  ],
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--remote-debugging-port=9222',
          ],
        },
      },
    },
  ],
};

export default config;
