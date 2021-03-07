const {chromium} = require('playwright');
const chai = require('chai')
const expect = chai.expect

// playwright variables
let browser, page, context;

describe("Simple playwright test", async () => {

    beforeEach(async () => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it("Page title validation", async () => {
        await page.goto('http://automationpractice.com/index.php');
        expect(await page.title()).to.equal("My Sore");
    });

});

