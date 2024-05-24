let TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT

if (!TEST_ENVIRONMENT) {
    throw new Error(
        'TEST_ENVIRONMENT is not defined, please set it in your .env file'
    )
}

async function globalSetup() {
    console.log(`Running tests in ${TEST_ENVIRONMENT} environment`)
    require('dotenv').config({ path: `./config/${TEST_ENVIRONMENT}.env` })
}

module.exports = globalSetup
