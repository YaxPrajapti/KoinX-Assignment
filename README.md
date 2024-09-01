## Features

- Fetches Ethereum transactions for a specific user address.
- Calculates the total gas expenses for the transactions.
- Periodically fetches and stores the current price of Ethereum.
- Provides API endpoints to access transaction data and calculate expenses.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user transactions and Ethereum prices.
- **Axios**: HTTP client for making API requests.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Node-Cron**: Task scheduler for running periodic jobs.

## Installation

### Prerequisites

- Node.js installed ([Download Node.js](https://nodejs.org/)).
- MongoDB installed locally or use MongoDB Atlas ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YaxPrajapti/KoinX-Assignment.git
   cd KoinX-Assignment
   npm install
2. **set up env variables**
    PORT=XXXX
    MONGO_URI=your-mongodb-connection-string
    ETHERSCAN_API_KEY=your-etherscan-api-key
3. **Run application**   
    ```bash 
    npm start
## API Endpoints

### 1. Get transaction list associated with user
- **Endpoint**: `/api/fetch/:address`
- **Method**: `GET`
- **Description**: Returns the list of transactions for this address.
- **Path Parameters**:
  - `:address` - Ethereum address of the user.
- **Example Request**:

  ```http
  GET http://localhost:3000/api/fetch/0xYourEthereumAddress
### 2. Get Total Expenses and Current Ether Price
- **Endpoint**: `/api/expense/:address`
- **Method**: `GET`
- **Description**: Returns total expenses and current price of ether.
- **Path Parameters**:
  - `:address` - Ethereum address of the user.
- **Example Request**:

  ```http
  GET http://localhost:3000/api/expense/0xYourEthereumAddress
## production env API 
### 1. Get transaction list associated with user

    GET https://koinx-assignment-pxit.onrender.com/api/fetch/0xYourEthereumAddress
### 2. Get Total Expenses and Current Ether Price
    GET https://koinx-assignment-pxit.onrender.com/api/expense/0xYourEthereumAddress

  
