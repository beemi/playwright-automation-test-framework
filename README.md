# 🎭 Playwright UI Automation Framework 🎭

[![Playwright](https://img.shields.io/badge/Playwright-1.44.0-blue)](https://playwright.dev/)
[![Typescript](https://img.shields.io/badge/Typescript-4.9.5-blue)](https://www.typescriptlang.org/)
[![Allure](https://img.shields.io/badge/Allure-2.13.8-blue)](https://docs.qameta.io/allure/)
[![Node](https://img.shields.io/badge/Node-14.17.6-green)](https://nodejs.org/en/)
[![Npm](https://img.shields.io/badge/Npm-6.14.15-green)](https://www.npmjs.com/)

## Introduction 📝

This repository contains the UI automation framework for the 🌐 simple web application.
The framework is built using 🎭 Playwright,
tests are written in 🔠 Typescript,
with 🏃 Jest as the test runner,
📈 Allure for test reporting,
and 🎲 Faker for test data generation.

## Table of Contents 📚

-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Lint and Format](#lint-and-format)
-   [Reporting](#reporting)
-   [CI/CD](#cicd)
-   [Contact](#contact)

## Project Structure 📁

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

## Installation 🛠

```bash
npm init playwright@latest
```

Check the installation by running the following command:

```bash
npx playwright --version
```

Run all tests in headless mode:

```bash
npm test
```

Run all tests in headed mode:

```bash
npm run test:headed
```

### Lint 🧹 and Format 🎨

To lint the code, run the following command:

```bash
npm run lint
```

Also `husky` is configured in the project to run the linting and formatting on every commit.

:warning: _**Note:**_ Git commit message should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

### Reporting 📊

[Allure GitHub](https://allurereport.org/docs/integrations-github/)

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

-   🌐 Development
-   🌐 QA
-   🌐 Production
    ...and across browsers:

-   🌐 Chrome
-   🌐 Firefox
-   🌐 Webkit

GitHub workflow file: `.github/workflows/playwright.yml`

Allure reports are generated and published via GitHub Pages.

### Contact 📧

Questions? Reach out to us at 📧 [beemi.raja@gmail.com](mailto:beemi.raja@gmail.com)

```

```
