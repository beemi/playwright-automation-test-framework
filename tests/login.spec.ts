import {expect, test} from '@playwright/test';
import {allure} from "allure-playwright";

import {HomePage} from '../pages/home-page';
import {LoginPage} from '../pages/login-page';

test.describe('Login', () => {

    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
    });

    test('should be able to login', async ({page}) => {

        await allure.epic("Login");
        await allure.feature("Login feature");
        await allure.story("Login story");

        const email = process.env.USER_EMAIL_NAME;
        const password = process.env.USER_PASSWORD;

        await allure.step("Navigate to home page", async () => {
            await homePage.navigateToHomePage("/");
        });

        await allure.step("Click on login button", async () => {
            await homePage.clickOnLoginButton();
        });

        await allure.step("Enter email and password", async () => {
            // @ts-ignore
            await loginPage.enterEmail(email);
            // @ts-ignore
            await loginPage.enterPassword(password);
        });

        await allure.step("Click on login button", async () => {
            await loginPage.clickOnLoginButton();
        });

        await allure.step("Verify that user is logged in", async () => {
            const url = page.url();
            expect(url).toContain('account/account');
            console.log('Current page url is: ' + url);
        });

        await allure.step("Logout", async () => {
            await loginPage.clickOnLogoutButton();
        });
    });
});
