const axios = require("axios");
const UserTransaction = require("../model/userModel");

module.exports.fetchNormalTransaction = async (req, res, next) => {
  const accountAddress = req.params.address;
  const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
  //   console.log(accountAddress, ETHERSCAN_API_KEY);
  const api_string = `https://api.etherscan.io/api?module=account&action=txlist&address=${accountAddress}&&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`;
  try {
    const responseData = await axios.get(api_string);
    const transactions = responseData.data.result;
    if (!transactions || transactions.length === 0) {
      return res
        .status(404)
        .send("No transaction are associated to provided address");
    }
    const newTransaction = await UserTransaction.findOneAndUpdate(
      { userAddress: accountAddress },
      { $push: { transactions: { $each: transactions } } },
      { new: true, upsert: true }
    );
    res.status(200).send({
      message: "Transaction fetched successfully",
      transactions: newTransaction,
    });
  } catch (error) {
    console.error("Error fetching data from Etherscan API:", error);
    res.status(500).send("An error occurred while fetching data.");
  }
};
