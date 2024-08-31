const express = require("express");
const TransactionController = require("../Controller/transaction");

const router = express.Router();

router.get("/:address", TransactionController.fetchNormalTransaction);

module.exports = router;
