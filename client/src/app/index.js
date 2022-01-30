import * as React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../components/child_view/Home';
import Earn from '../components/child_view/Earn';
import Rewards from "../components/child_view/Rewards";
import Invest from '../components/child_view/Invest';

function App() {
  // const finnhub = require('finnhub');

  // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  // api_key.apiKey = "c7qobl2ad3ia6nr4s5o0"
  // const finnhubClient = new finnhub.DefaultApi()

  // finnhubClient.quote("AAPL", (error, data, response) => {
  //   console.log(data)
  // });
  
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/use" element={<Rewards/>} />
      <Route path="/earn" element={<Earn/>} />
      <Route path="/invest" element={<Invest/>} />
    </Routes>
  );
}

export default App;
