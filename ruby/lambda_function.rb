require("faraday")

def handler(event:, context:)
  res = Faraday.get "https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY"
  JSON.parse res.body
end
