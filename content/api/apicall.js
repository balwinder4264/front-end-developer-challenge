let vargoogle = "";
let varmicrosoft = "";
let varbicoin = "";

Google = async () => {
  await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=JQ1LE8WZCWJRAMXL",
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      var symbol = data["Meta Data"]["2. Symbol"];
      var lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
      var hi = data["Time Series (Daily)"][lastRefreshed]["2. high"];
      var lo = data["Time Series (Daily)"][lastRefreshed]["3. low"];

      document.querySelector("#Googlehi").innerHTML =
        data["Time Series (Daily)"][lastRefreshed]["2. high"];
      document.querySelector("#Googlelow").innerHTML =
        data["Time Series (Daily)"][lastRefreshed]["3. low"];

      vargoogle = symbol;

      //return symbol, hi, lo
    });
};

//microsoft
microsoft = async () => {
  await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=JQ1LE8WZCWJRAMXL",
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      document.querySelector("#microsofthi").innerHTML =
        data["Time Series (Daily)"]["2020-02-14"]["2. high"];
      document.querySelector("#microsoflow").innerHTML =
        data["Time Series (Daily)"]["2020-02-14"]["3. low"];
    });
};
Bitcoin = async () => {
  await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BTCUSD&apikey=JQ1LE8WZCWJRAMXL",
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      //  console.log("Bitcoin ", data['Time Series (Daily)']['2020-02-14'])
      Bitcoin = data["Time Series (Daily)"]["2020-02-14"];
      //console.log("Bitcoin", Bitcoin)
      document.querySelector("#Bitcoinhi").innerHTML =
        data["Time Series (Daily)"]["2020-02-14"]["2. high"];
      document.querySelector("#Bitcoinlow").innerHTML =
        data["Time Series (Daily)"]["2020-02-14"]["3. low"];
    });
};
Google();

microsoft();

Bitcoin();

//// console.log("microsoft", microsoft())
// console.log("Bitcoin", Bitcoin(s))
