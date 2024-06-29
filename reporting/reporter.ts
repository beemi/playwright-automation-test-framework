import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import { MySQLClient } from './mysql-client';

class CustomReporter implements Reporter {
  private dataClient: MySQLClient;

  constructor() {
    this.dataClient = new MySQLClient();
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const testData = {
      name: test.title,
      status: result.status,
      duration: result.duration,
      errorMessage: result.error?.message,
      screenshot: result.attachments.find((a) => a.name === 'screenshot')?.path,
    };

    this.dataClient.pushTestResult(testData);
  }
}

export default CustomReporter;
