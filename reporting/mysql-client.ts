import mysql from 'mysql2/promise';

export class MySQLClient {
  private connection: mysql.Connection;

  constructor() {
    this.initConnection();
  }

  private async initConnection() {
    this.connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'playwright_results',
    });

    await this.connection.execute(`
      CREATE TABLE IF NOT EXISTS test_results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        status VARCHAR(50),
        duration INT,
        error_message TEXT DEFAULT NULL,
        screenshot_path VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  async pushTestResult(testData: any) {
    console.log('Pushing test result to MySQL with data:', testData);
    for (const key of Object.keys(testData)) {
      if (testData[key] === undefined) {
        testData[key] = null;
      }
    }
    const [rows] = await this.connection.execute(
      'INSERT INTO test_results (name, status, duration, error_message, screenshot_path) VALUES (?, ?, ?, ?, ?)',
      [
        testData.name,
        testData.status,
        testData.duration,
        testData.errorMessage,
        testData.screenshot,
      ]
    );
    console.log('Test result pushed to MySQL');
  }
}
