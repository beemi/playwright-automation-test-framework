const {chromium} = require('playwright');
const chai = require('chai')
const expect = chai.expect

const Chance = require("chance");
const chance = new Chance();

let firstname, lastname, email, address1, address2, city, county, postcode, phoneNumber;

// playwright variables
let browser, page, context;

describe("paypal", async () => {

    before(async () => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();


        email = chance.email({domain: "example.com"});
        firstname = chance.first();
        lastname = chance.last();
        address1 = chance.address({short_suffix: true});
        address2 = chance.address({short_suffix: true});
        city = chance.city();
        county = chance.county();
        postcode = "RM17 6EY";
        phoneNumber = chance.phone({country: "uk"});
    });
    after(async () => {
        // await page.close();
    });


    it("tl payment paypal payment", async () => {

        await page.goto("https://tlqa:1000parrots@trinnylondon-dev.com");

        await page.waitForSelector("#email");
        await page.click("[class*='ModalDialog_closeButtonSVG_']");

        await page.click("[data-test-id$='menu-accessories']");
        await page.waitForSelector("[data-test-id$='buy-button']");

        await page.click("[data-test-id$='buy-button']");

        await page.click("[data-test-id$='navigation-cart']");

        await page.waitForSelector("[data-test-id$='checkout']");
        await page.click("[data-test-id$='checkout']");

        await page.waitForSelector("[data-test-id$='guest-checkout-email-input']");
        await page.fill("[data-test-id$='guest-checkout-email-input']", email);

        await page.click("[data-test-id$='checkout-as-a-guest']");

        await page.waitForSelector("[data-test-id$='skip']");
        await page.click("[data-test-id$='skip']");

        await page.waitForSelector("[data-test-id$='shippingfirst-name']");
        await page.fill("[data-test-id$='shippingfirst-name']", firstname);
        await page.fill("[data-test-id$='shippinglast-name']", lastname);
        await page.fill("[data-test-id$='shippingaddress1']", address1);
        await page.fill("[data-test-id$='shippingaddress2']", address2);
        await page.fill("[data-test-id$='shippingcity']", city);
        await page.fill("[data-test-id$='shippingcounty']", county);
        await page.fill("[data-test-id$='shippingpostcode']", postcode);
        await page.fill("[data-test-id$='shippingphone-number']", phoneNumber);

        await page.click("[data-test-id$='continue-to-delivery']");

        await page.waitForSelector("[data-test-id$='continue-to-payment']");
        await page.click("[data-test-id$='continue-to-payment']");

        await page.waitForSelector("[data-test-id$='add-a-gift-card']");

        // const payPalRadioButton = await page.$('[class*="BaseSection_radioButton_"]');
        await page.click("div[class='BaseSection_title_196Xv PayPal_title_3CSVy'] img[class='BaseSection_radioButton_-YHcy']");

        await page.click("[id$='terms']");

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('[class$="adyen-checkout__paypal__buttons"]')
        ])

        await newPage.waitForLoadState('domcontentloaded');
        console.log("Paypal new window:", await newPage.title());
        await newPage.waitForSelector("#email");
        console.log("Paypal url:", newPage.url())

        await newPage.fill("#email", "test@test.com");
        await newPage.fill("#password", "test121");

        await newPage.click("#btnLogin");


    });
});