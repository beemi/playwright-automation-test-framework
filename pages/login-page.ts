import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage(url: string) {
        await this.page.goto(url);
    }

    async enterUsername(username: string) {
        await this.page.fill('input[name="username"]', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('input[name="password"]', password);
    }

    async clickOnContinueButton() {
        await this.page.click('text=Continue');
        console.log('Continue button clicked');
    }

    async clickOnLoginButton() {
        await this.page.click('text=Login');
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register');
    }

    async clickOnLogoutButton() {
        await this.page.click('text=Logout');
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
