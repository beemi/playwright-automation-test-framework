import { type Page } from '@playwright/test'

const logger = require('../test-utils/logger')('register-page')

export class RegisterPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigateToRegisterPage(url: string) {
        await this.page.goto(url)
        logger.info('Navigated to register page')
    }

    async enterFirstName(firstName: string) {
        await this.page.fill('#input-firstname', firstName)
        logger.info('First name entered')
    }

    async enterLastName(lastName: string) {
        await this.page.fill('#input-lastname', lastName)
        logger.info('Last name entered')
    }

    async enterEmail(email: string) {
        await this.page.fill('#input-email', email)
        logger.info('Email entered')
    }

    async enterTelephone(telephone: string) {
        await this.page.fill('#input-telephone', telephone)
        logger.info('Telephone entered')
    }

    async enterPassword(password: string) {
        await this.page.fill('#input-password', password)
        logger.info('Password entered')
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page.fill('#input-confirm', confirmPassword)
        logger.info('Confirm password entered')
    }

    async clickOnSubscribeRadioButton() {
        await this.page.click('text=Yes')
        logger.info('Subscribe radio button clicked')
    }

    async clickOnPrivacyPolicyCheckbox() {
        await this.page.click('label[for=input-agree]')
        logger.info('Privacy policy checkbox clicked')
    }

    async clickOnContinueButton() {
        await this.page.click('text=Continue')
        logger.info('Continue button clicked')
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register')
    }

    async clickOnLoginButton() {
        await this.page.click('text=Login')
    }

    async clickOnLogoutButton() {
        await this.page.click('text=Logout')
    }

    async clickOnBillingLineButton() {
        await this.page.click('text=Billing Lines')
    }

    async clickOnBillingLineBasketButton() {
        await this.page.click('text=Billing Line Basket')
    }

    async clickOnBillingLineBasketCheckoutButton() {
        await this.page.click('text=Checkout')
    }

    async clickOnBillingLineBasketCheckoutConfirmButton() {
        await this.page.click('text=Confirm')
    }

    async clickOnBillingLineBasketCheckoutCancelButton() {
        await this.page.click('text=Cancel')
    }

    async clickOnBillingLineBasketCheckoutCloseButton() {
        await this.page.click('text=Close')
    }

    async clickOnBillingLineBasketCheckoutCloseConfirmButton() {
        await this.page.click('text=Confirm')
    }

    async clickOnBillingLineBasketCheckoutCloseCancelButton() {
        await this.page.click('text=Cancel')
    }

    async clickOnBillingLineBasketCheckoutCloseCloseButton() {
        await this.page.click('text=Close')
    }
}
