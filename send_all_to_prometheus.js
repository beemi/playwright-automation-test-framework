const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Directory containing the JSON result files
const directory = 'allure-results/';

// Prometheus API endpoint
const url = 'http://metrics.load-test.amelcoinfra.net:9090/api/v1/write';

// Function to send JSON data to Prometheus
const sendJsonToPrometheus = async (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const payload = JSON.parse(data);

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      console.log(`Data from ${filePath} sent successfully!`);
    } else {
      console.log(
        `Failed to send data from ${filePath}. Status code: ${response.status}`
      );
      console.log('Response:', response.data);
      console.log('Data:', payload);
    }
  } catch (error) {
    console.error(`Error sending data from ${filePath}:`, error.message);
  }
};

// Send all JSON files to Prometheus
const files = fs.readdirSync(directory);
files.forEach((file) => {
  if (file.endsWith('-result.json')) {
    sendJsonToPrometheus(path.join(directory, file));
  }
});
