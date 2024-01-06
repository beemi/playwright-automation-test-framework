import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';

test.describe('Login', () => {

  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test('should be able to login', async ({page}) => {

    const email = process.env.USER_EMAIL_NAME;
    const password = process.env.USER_PASSWORD;

    await homePage.navigateToHomePage("/");
    await homePage.clickOnLoginButton();
    // @ts-ignore
    await loginPage.enterEmail(email);
    // @ts-ignore
    await loginPage.enterPassword(password);
    await loginPage.clickOnLoginButton();


    // get the url of the current page
    const url = page.url();
    expect(url).toContain('account/account');
    console.log('Current page url is: ' + url);

    // logout
    await loginPage.clickOnLogoutButton();
  });
});
