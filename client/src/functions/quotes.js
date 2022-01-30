function quotes(company) {
    const finnhub = require('finnhub');

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c7qobl2ad3ia6n"
    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.quote(company, (error, data, response) => {
    console.log(data)
    });
    // return data.c
}

export default quotes;
