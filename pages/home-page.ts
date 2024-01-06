import { expect, type Locator, type Page } from '@playwright/test';


const logger = require('../test-utils/logger')('home-page.ts');


export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage(url: string) {
        await this.page.goto(url);
        logger.info('Navigated to home page');
    }

    async clickOnLoginButton() {
        expect(await this.page.isVisible('text=My account')).toBeTruthy();
        expect(await this.page.title()).toContain('Your Store');
        logger.info('My account button is visible');
        // mouse over to My account 2nd element
        await this.page.hover('.icon.fas.fa-user');
        await this.page.click('text=Login');
        expect(await this.page.title()).toContain('Account Login');
        console.log('Login button clicked');
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register');
    }
    async clickOnBillingLineButton() {
        await this.page.click('text=Billing Lines');
    }

    async clickOnBillingLineBasketButton() {
        await this.page.click('text=Billing Line Basket');
    }

    async clickOnBillingLineBasketCheckoutButton() {
        await this.page.click('text=Checkout');
    }

    async clickOnBillingLineBasketCheckoutConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }
}
