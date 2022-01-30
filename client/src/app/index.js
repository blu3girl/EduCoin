function App() {
  const finnhub = require('finnhub');

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = "c7qobl2ad3ia6nr4s5o0"
  const finnhubClient = new finnhub.DefaultApi()

  finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
  });
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
