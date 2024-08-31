const express = require("express");
const expenseController = require("../Controller/expenseController");

const router = express.Router();

router.get("/:address", expenseController.fetchExpense);

module.exports = router;
