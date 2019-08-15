import requests

def lambda_handler(event, context):
  res = requests.get("https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY")
  return res.json()
