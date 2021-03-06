const {chromium} = require('playwright');
const expect = require('expect');
const assert = require("assert");
let browser;
let page;

describe("Simple playwright test", async () => {

    beforeEach(async () => {
        browser = await chromium.launch({headless: false});
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it("Page title validation", async () => {
        await page.goto('http://automationpractice.com/index.php');

        expect(await page.title()).to.equal("My Store");
    });

});

