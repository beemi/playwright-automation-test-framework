import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register-page';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';

import { faker } from '@faker-js/faker';

test.describe('Create new user account', () => {

  let registerPage: RegisterPage;
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({page}) => {
    registerPage = new RegisterPage(page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test('should be able to create a account', async () => {

    const password = faker.internet.password();
    await homePage.navigateToHomePage('https://ecommerce-playground.lambdatest.io/'); //navigate to home page
    await homePage.clickOnLoginButton();
    await loginPage.clickOnContinueButton();
    await registerPage.enterFirstName(faker.person.firstName());
    await registerPage.enterLastName(faker.person.lastName());
    await registerPage.enterEmail(faker.internet.email());
    await registerPage.enterTelephone(faker.phone.number());
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
    await registerPage.clickOnSubscribeRadioButton();
    await registerPage.clickOnPrivacyPolicyCheckbox();
    await registerPage.clickOnContinueButton();

    // get the url of the current page
  });
});
