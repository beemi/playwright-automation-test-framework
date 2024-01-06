import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToRegisterPage(url: string) {
        await this.page.goto(url);
        console.log('Register page opened');
    }

    async enterFirstName(firstName: string) {
        await this.page.fill('#input-firstname', firstName);
        console.log('First name entered');
    }

    async enterLastName(lastName: string) {
        await this.page.fill('#input-lastname', lastName);
        console.log('Last name entered');
    }

    async enterEmail(email: string) {
        await this.page.fill('#input-email', email);
        console.log('Email entered as: ' + email);
    }

    async enterTelephone(telephone: string) {
        await this.page.fill('#input-telephone', telephone);
        console.log('Telephone entered');
    }

    async enterPassword(password: string) {
        await this.page.fill('#input-password', password);
        console.log('Password entered as: ' + password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page.fill('#input-confirm', confirmPassword);
        console.log('Confirm password entered as: ' + confirmPassword);
    }

    async clickOnSubscribeRadioButton() {
        await this.page.click('text=Yes');
        console.log('Subscribe radio button clicked');
    }

    async clickOnPrivacyPolicyCheckbox() {
        await this.page.click('label[for=input-agree]');
        console.log('Privacy Policy checkbox clicked');
    }

    async clickOnContinueButton() {
        await this.page.click('text=Continue');
        console.log('Continue button clicked');
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
