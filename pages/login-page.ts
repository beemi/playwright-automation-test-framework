import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterEmail(email: string) {
        await this.page.fill('#input-email', email);
    }

    async enterPassword(password: string) {
        await this.page.fill('#input-password', password);
    }

    async clickOnContinueButton() {
        await this.page.click('text=Continue');
        console.log('Continue button clicked');
    }

    async clickOnLoginButton() {
        await this.page.click('input[value=Login]');
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register');
    }

    async clickOnLogoutButton() {
        await this.page.click('text=Logout');
        console.log('Logout button clicked');
        await this.page.waitForSelector('#input-email');
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
}
