import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
