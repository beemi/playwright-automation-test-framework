# 🌟 Playwright UI Automation Framework 🌟

This repository contains the UI automation framework for the 🌐 simple web application.
The framework is built using 🎭 Playwright,
tests are written in 🔠 Typescript,
with 🏃 Jest as the test runner,
📈 Allure for test reporting,
and 🎲 Faker for test data generation.

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

The CI/CD pipeline, configured with GitHub Actions, triggers on every push to the main branch. It runs tests in:

* 🌐 Development
* 🌐 QA
* 🌐 Production
...and across browsers:


* 🌐 Chrome
* 🌐 Firefox
* 🌐 Webkit

GitHub workflow file: `.github/workflows/playwright.yml`

### Contact 📬
Questions? Reach out to us at 📧 beemi.raja@gmail.com
