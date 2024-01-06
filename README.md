#  🎉 Playwright UI Automation Framework  🎉

This repository contains the UI automation framework for the [simple web application](https://ecommerce-playground.lambdatest.io/index.php?route=common/home)
The framework is built using [Playwright](https://playwright.dev/),
test are written in [Typescript](https://www.typescriptlang.org/),
and the test runner is [Jest](https://jestjs.io/),
and the test reporter is [Allure](https://docs.qameta.io/allure/),
and the test data is generated using [Faker](https://www.npmjs.com/package/faker),

![alt text](docs/playwright-logo.png)

## Project Structure 🏷️

```angular2html
├───.github
│   └───workflows
├───docs # contains the documentation
├───config # contains the configuration files for each environment
│   ├───dev.env
│   ├───prod.env
│   └───qa.env
├───pages # contains the page objects for each page
|   ├───home-page.ts
|   ├───login-page.ts
|   ├───product-page.ts
|   ├───shopping-cart-page.ts
|   └───checkout-page.ts
├───tests # contains the test files
|   ├───checkout.test.ts
|   ├───login.test.ts
|   ├───product.test.ts
|   ├───shopping-cart.test.ts
|   └───test-data.ts
├───global-setup.ts # contains the global setup
├───playwright.config.ts # contains the playwright configuration
├───allure-results # contains the allure results
```

## Installation 🔨

```bash
npm init playwright@latest
```

Check the installation by running the following command:

```bash
npx playwright --version
```

```bash
npm test
```

### Reporting 📊

To generate the allure report, run the following command:

```bash
npm run generate:allure:report
```

To open the allure report, run the following command:

```bash

npm run open:allure:report
```

### CI/CD 🚀

The CI/CD pipeline is configured using GitHub Actions. The pipeline is triggered on every push to the main branch.
The pipeline is configured to run the tests on the following environments:

- Development
- QA
- Production

The pipeline is configured to run the tests on the following browsers:

- Chrome
- Firefox
- Webkit

GitHub workflow file is located at `.github/workflows/playwright.yml`

## Contact 📧

If you have any questions, please feel free to reach out to us at [beemi.raja@gmail.com](mailto:beemi.raja@gmail.com)
