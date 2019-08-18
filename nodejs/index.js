const axios = require("axios");

exports.handler = async function(event, context) {
  const res = await axios.get("https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY");
  console.log(res.data);
  return res.data;
}
