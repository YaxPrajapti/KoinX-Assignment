const express = require("express");
const dotenv = require("dotenv").config({ path: "./.env" });
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionRouter = require("./router/transactionRouter");
const expenseRouter = require("./router/expenseRouter");

const { scheduler } = require("./cronScheduler");

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/fetch", transactionRouter);
app.use("/api/expense", expenseRouter);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    scheduler();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect database and starting server", err);
  });
