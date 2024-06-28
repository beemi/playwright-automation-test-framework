import { chromium, Browser, Page } from 'playwright';
import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

let browser: Browser;
let page: Page;

test.describe('Playwright web page audits using lighthouse', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({
      args: ['--remote-debugging-port=9222'],
    });
    page = await browser.newPage();
    await page.goto('https://angular.io/');
  });

  test('perform web page audit with custom score for all categories', async () => {
    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      port: 9222,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
