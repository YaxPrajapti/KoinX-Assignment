const express = require("express");
const TransactionController = require("../Controller/transaction");

const router = express.Router({ mergeParams: true });

router.get("/:address", TransactionController.fetchNormalTransaction);

module.exports = router;
