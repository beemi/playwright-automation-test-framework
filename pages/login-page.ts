import { type Page, expect } from '@playwright/test'

const logger = require('../test-utils/logger')('login-page')

export class LoginPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async enterEmail(email: string) {
        await this.page.fill('#input-email', email)
        logger.info('Email is entered')
    }

    async enterPassword(password: string) {
        await this.page.fill('#input-password', password)
        logger.info('Password is entered')
    }

    async clickOnContinueButton() {
        await this.page.click('text=Continue')
        logger.info('Continue button is clicked')
    }

    async clickOnLoginButton() {
        await this.page.click('input[value=Login]')
        logger.info('Login button is clicked')
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register')
    }

    async clickOnLogoutButton() {
        await this.page.click("//a[contains(text(),'Logout')]")
        logger.info('Logout button is clicked')
        await this.page.waitForSelector('#common-success')
        expect(await this.page.isVisible('#common-success')).toBeTruthy()
        const successMessage = await this.page.textContent('#common-success')
        expect(successMessage).toContain(
            'You have been logged off your account. It is now safe to leave the computer.'
        )
        logger.info('User is logged out')
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
