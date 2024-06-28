import requests
import json
import glob
import os

# Directory containing the JSON result files
directory = 'allure-results/'

# Prometheus API endpoint
url = 'http://metrics.load-test.amelcoinfra.net:9090/api/v1/write'

# Function to send JSON data to Prometheus
def send_json_to_prometheus(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    payload = json.dumps(data)
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.post(url, headers=headers, data=payload)

    if response.status_code == 200:
        print(f'Data from {file_path} sent successfully!')
    else:
        print(f'Failed to send data from {file_path}. Status code: {response.status_code}')
        print('Response:', response.text)

# Find all JSON files with -result.json suffix in the specified directory
for file_path in glob.glob(os.path.join(directory, '*-result.json')):
    send_json_to_prometheus(file_path)
