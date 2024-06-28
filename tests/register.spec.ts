import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';
import { ConfigUtils } from '../test-utils/config-utils';

test.describe.parallel('Create new user account', () => {
  let registerPage: RegisterPage;
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await allure.epic('Register');
    await allure.feature('Register feature');
    await allure.story('Register story');

    registerPage = new RegisterPage(page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test('should be able to create a account', async ({ page }) => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    await allure.step('Navigate to home page', async () => {
      await homePage.navigateToHomePage('/');
    });

    await allure.step('Click on login button', async () => {
      await homePage.clickOnLoginButton();
    });

    await allure.step('Click on continue button', async () => {
      await loginPage.clickOnContinueButton();
    });

    await allure.step('Enter first name', async () => {
      await registerPage.enterFirstName(faker.person.firstName());
    });

    await allure.step('Enter last name', async () => {
      await registerPage.enterLastName(faker.person.lastName());
    });

    await allure.step('Enter email', async () => {
      await registerPage.enterEmail(email);
    });

    await allure.step('Enter telephone', async () => {
      await registerPage.enterTelephone(faker.phone.number());
    });

    await allure.step('Enter password', async () => {
      await registerPage.enterPassword(password);
    });

    await allure.step('Enter confirm password', async () => {
      await registerPage.enterConfirmPassword(password);
    });

    await allure.step('Click on subscribe radio button', async () => {
      await registerPage.clickOnSubscribeRadioButton();
    });

    await allure.step('Click on privacy policy checkbox', async () => {
      await registerPage.clickOnPrivacyPolicyCheckbox();
    });

    await allure.step('Click on continue button', async () => {
      await registerPage.clickOnContinueButton();
    });

    await allure.step('Verify that user is logged in', async () => {
      const url = page.url();
      expect(url).toContain('account/success');
      console.log('Current page url is: ' + url);
    });
  });

  test("shouln't be able to create a account with existing email", async ({
    page,
  }) => {
    const email = ConfigUtils.getConfigValue('USER_EMAIL_NAME');
    const password = faker.internet.password();

    await allure.step('Navigate to home page', async () => {
      await homePage.navigateToHomePage('/');
    });

    await allure.step('Click on login button', async () => {
      await homePage.clickOnLoginButton();
    });

    await allure.step('Click on continue button', async () => {
      await loginPage.clickOnContinueButton();
    });

    await allure.step('Enter first name', async () => {
      await registerPage.enterFirstName(faker.person.firstName());
    });

    await allure.step('Enter last name', async () => {
      await registerPage.enterLastName(faker.person.lastName());
    });

    await allure.step('Enter email', async () => {
      await registerPage.enterEmail(email);
    });

    await allure.step('Enter telephone', async () => {
      await registerPage.enterTelephone(faker.phone.number());
    });

    await allure.step('Enter password', async () => {
      await registerPage.enterPassword(password);
    });

    await allure.step('Enter confirm password', async () => {
      await registerPage.enterConfirmPassword(password);
    });

    await allure.step('Click on subscribe radio button', async () => {
      await registerPage.clickOnSubscribeRadioButton();
    });

    await allure.step('Click on privacy policy checkbox', async () => {
      await registerPage.clickOnPrivacyPolicyCheckbox();
    });

    await allure.step('Click on continue button', async () => {
      await registerPage.clickOnContinueButton();
    });

    await allure.step('Verify that Email is already registered', async () => {
      const warnMessage = page.getByText('Warning: E-Mail Address is');

      expect(warnMessage).toBeTruthy();
      expect(warnMessage).toHaveText(
        'Warning: E-Mail Address is already registered!'
      );
      console.log('Warning message is: ' + warnMessage);
    });
  });
});
