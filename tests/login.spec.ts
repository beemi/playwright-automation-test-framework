import { expect, test } from '@playwright/test'
import { Severity } from 'allure-js-commons'
import { allure } from 'allure-playwright'

import { HomePage } from '../pages/home-page'
import { LoginPage } from '../pages/login-page'
import { ConfigUtils } from '../test-utils/config-utils'

test.describe.parallel(
    'Login tests',
    {
        tag: ['@login'],
    },
    () => {
        let homePage: HomePage
        let loginPage: LoginPage

        test.beforeEach(async ({ page }) => {
            homePage = new HomePage(page)
            loginPage = new LoginPage(page)
        })

        test('should be able to login', async ({ page }) => {
            await allure.description(
                'This test is to verify that user is able to login & logout successfully'
            )
            await allure.severity(Severity.CRITICAL)
            await allure.owner('Raj')
            await allure.tags('login', 'smoke')
            await allure.link('Jira ticket', 'https://www.jira.com')

            await allure.epic('Login')
            await allure.feature('Login feature')
            await allure.story('Login story')

            const email = ConfigUtils.getConfigValue('USER_EMAIL_NAME')
            const password = ConfigUtils.getConfigValue('USER_PASSWORD')

            await allure.step('Navigate to home page', async () => {
                await homePage.navigateToHomePage('/')
            })

            await allure.step('Click on login button', async () => {
                await homePage.clickOnLoginButton()
            })

            await allure.step('Enter email and password', async () => {
                await loginPage.enterEmail(email)
                await loginPage.enterPassword(password)
            })

            await allure.step('Click on login button', async () => {
                await loginPage.clickOnLoginButton()
            })

            await allure.step('Verify that user is logged in', async () => {
                const url = page.url()
                expect(url).toContain('account/account')
                console.log('Current page url is: ' + url)
            })

            await allure.step('Logout', async () => {
                await loginPage.clickOnLogoutButton()
            })
        })
    }
)
