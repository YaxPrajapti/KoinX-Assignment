const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  blockNumber: { type: String },
  timeStamp: { type: String },
  hash: { type: String, unique: true },
  nonce: { type: String },
  blockHash: { type: String },
  transactionIndex: { type: String },
  from: { type: String },
  to: { type: String },
  value: { type: String },
  gas: { type: String },
  gasPrice: { type: String },
  isError: { type: String },
  txreceipt_status: { type: String },
  input: { type: String },
  contractAddress: { type: String },
  cumulativeGasUsed: { type: String },
  gasUsed: { type: String },
  confirmations: { type: String },
  methodId: { type: String },
  functionName: { type: String },
});

const userTransactionSchema = new mongoose.Schema({
  userAddress: { type: String, required: true, unique: true },
  transactions: [transactionSchema],
});

const UserTransaction = mongoose.model(
  "UserTransaction",
  userTransactionSchema
);

module.exports = UserTransaction;
