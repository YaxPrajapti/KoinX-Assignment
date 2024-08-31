const axios = require("axios");

module.exports.fetchEthPrice = async () => {
  const api_string =
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr";
  try {
    const res = await axios.get(api_string);
    return res.data.ethereum;
  } catch (error) {
    console.error("Error in fetching eth price");
  }
};
