const cron = require("node-cron");
const EthPrice = require("./model/ethPrice");
const { fetchEthPrice } = require("./services/fetchEthPrice");

module.exports.scheduler = () => {
  try {
    cron.schedule("*/10 * * * *", async function () {
      const ethPrice = await fetchEthPrice();
      const inrPrice = ethPrice.inr;
      const newPrice = new EthPrice({ price: inrPrice });
      await newPrice.save();
      console.log(`New eth price is ${inrPrice}`);
    });
  } catch (error) {
    console.error("Error in saving eth price to databse");
  }
};
