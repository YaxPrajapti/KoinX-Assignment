const User = require("../model/userModel");
const EthPrice = require("../model/ethPrice");
module.exports.fetchExpense = async (req, res, next) => {
  let totalExpense = 0;
  const userAddress = req.params.address;
  try {
    const user = await User.findOne({ userAddress: userAddress });
    if (!user) {
      return res.status(401).send("Invalid address");
    }
    if (user.transactions.length === 0) {
      return res.status(204).send("User has not made any transaction");
    }
    const transactionList = user.transactions;
    //expense = gasUsed*gasPrice
    transactionList.map((transaction) => {
      const gasUsed = transaction.gasUsed;
      const gasPrice = transaction.gasPrice;
      const transactionPrice = (gasUsed * gasPrice) / 10 ** 18;
      totalExpense += transactionPrice;
    });
    const ethPrice = await EthPrice.find().sort({ _id: -1 }).limit(1);
    const resObj = {
      expense: totalExpense,
      eth: ethPrice[0].price,
    };
    res.status(200).send(resObj);
  } catch (error) {
    res.status(500).send("An error occurred while fetching expenses.");
  }
};
