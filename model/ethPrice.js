const mongoose = require("mongoose");

const ethPriceSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const EthPrice = mongoose.model("EthPrice", ethPriceSchema);
module.exports = EthPrice;
