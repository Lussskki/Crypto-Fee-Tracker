# **CryptoFeeCalc: Bitcoin & Ethereum Fee Calculator**

**CryptoFeeCalc** is a REST API that calculates transaction fees for Bitcoin and Ethereum. This project uses **Node.js** for the backend and **Python** for fee calculations. Users can send requests with parameters like transaction size, fee rate, gas used, and gas price to get accurate fee estimates for Bitcoin and Ethereum transactions.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Installation](#installation)
  - [Install Dependencies for Node.js](#install-dependencies-for-nodejs)
  - [Install Python Dependencies](#install-python-dependencies)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [License](#license)
- [Happy New Year 2025](#happy-new-year-2025)

---

## **Project Overview**

**CryptoFeeCalc** allows users to calculate transaction fees for Bitcoin and Ethereum. The backend is built using **Node.js** and the API interacts with a Python script (`calculations.py`) to compute the fees based on the provided parameters.

The project includes the following components:

- **Node.js Backend**: Provides the REST API and handles the HTTP requests.
- **Python Script (`calculations.py`)**: Performs the fee calculations for Bitcoin and Ethereum transactions.
- **REST API Endpoint**: Allows clients to interact with the system by sending POST requests to get the calculated fees.

---

## **Installation**

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/CryptoFeeCalc.git

```

## **Usage**
Once the server is up and running, you can interact with the API using Postman or any HTTP client.

1. Make a POST Request
You can send a POST request to http://localhost:3000/api/calculate with the following data format:

Request Body
json
Copy code
```
{
  "bitcoin_transaction_size": 250,
  "bitcoin_fee_rate": 10,
  "ethereum_gas_used": 21000,
  "ethereum_gas_price": 20
}
```
bitcoin_transaction_size: The size of the Bitcoin transaction in bytes.
bitcoin_fee_rate: The fee rate in satoshis per byte for Bitcoin.
ethereum_gas_used: The gas used for Ethereum transaction.
ethereum_gas_price: The gas price in gwei for Ethereum.
2. Response
The API will respond with a JSON object containing the calculated fees for Bitcoin and Ethereum:

json
Copy code
```
{
  "bitcoin": {
    "btc_fee_satoshis": 2500,
    "btc_fee_in_btc": 0.000025
  },
  "ethereum": {
    "eth_fee_in_gwei": 420000,
    "eth_fee_in_eth": 0.00042
  }
}
```
Endpoints
POST /api/calculate
Description: Calculates the transaction fee for Bitcoin and Ethereum.

Request Body:
```
bitcoin_transaction_size: Integer (Transaction size in bytes for Bitcoin)
bitcoin_fee_rate: Integer (Fee rate in satoshis per byte for Bitcoin)
ethereum_gas_used: Integer (Gas used for Ethereum transaction)
ethereum_gas_price: Integer (Gas price in gwei for Ethereum)
```
Response:
```
bitcoin: An object containing btc_fee_satoshis and btc_fee_in_btc.
ethereum: An object containing eth_fee_in_gwei and eth_fee_in_eth.
```