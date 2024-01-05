import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToRegisterPage(url: string) {
        await this.page.goto(url);
    }

    async enterUsername(username: string) {
        await this.page.fill('input[name="username"]', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('input[name="password"]', password);
    }

    async enterConfirmPassword(password: string) {
        await this.page.fill('input[name="confirmPassword"]', password);
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register');
    }

    async clickOnLoginButton() {
        await this.page.click('text=Login');
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
