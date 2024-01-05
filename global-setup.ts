let TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT

if (!TEST_ENVIRONMENT) {
  TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT = 'qa'
}

async function globalSetup() {
  const config = {
    baseUrl: 'https://www.google.com',
    testEnvironment: TEST_ENVIRONMENT,
    testEnvironmentUrl: 'https://www.google.com',
    testEnvironmentUsername: 'test',
  }
}

module.exports = globalSetup
