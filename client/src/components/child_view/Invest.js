import "../../stylesheets/child/invest.css";
import {
    ArrowUp,
    Coin,
    Lion,
    Stock,
    TaskList,
    Gift,
    Investment,
    Game,
} from "../svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle, faAmazon, faFacebook } from '@fortawesome/free-brands-svg-icons'
import GOOGLchart from "../../functions/GOOGLchart";
import APPLchart from "../../functions/APPLchart";
import DISchart from "../../functions/DISchart";
import FBchart from "../../functions/FBchart";
import GMEchart from "../../functions/GMEchart";
import KOchart from "../../functions/KOchart";
import MCDchart from "../../functions/MCDchart";
import NFLXchart from "../../functions/NFLXchart";
import NKEchart from "../../functions/NKEchart";
import TSLAchart from "../../functions/TSLAchart";
import { Link } from 'react-router-dom'


import netflix from "../../assets/netflix.svg";
import nike from "../../assets/nike.svg";
import cocacola from "../../assets/cocacola.svg";
import disney from "../../assets/disney.svg";
import mcdonalds from "../../assets/mcdonalds.svg";
import tesla from "../../assets/tesla.svg";
import gamestop from "../../assets/gamestop.svg";

import Quotes from "../../functions/quotes";
import NetReturn from "../../functions/netReturn";

import apis from '../../api'

const { Component } = require("react");

class Invest extends Component {
    constructor() {
        super();
        this.state = {
            stocks: [],
            current_stock: {},
            current_shares: 0,
            coins: 500,
            transactionCoins: 0
        }
    }

    componentDidMount = async () => {
        const getStocks = await apis.getStocks()
        this.setState({stocks: getStocks.data.data, current_stock: getStocks.data.data[0]})
        
        const getShares = await apis.getShares("61f621d3bf24162200bfb993", "GOOGL")  
        this.setState({current_shares: getShares.data.data.shares})

        await apis.getChildById("61f621d3bf24162200bfb993")
                .then((res) => this.setState({coins: res.data.data.coins}))
                .catch((err) => console.log(err))

    }

    handleChangeStock = async (i) => {
        
        const getStocks = await apis.getStocks()
        this.setState({current_stock: getStocks.data.data[i]})
        const getShares = await apis.getShares("61f621d3bf24162200bfb993", getStocks.data.data[i].ticker) 
        this.setState({current_shares: getShares.data.data.shares})
        console.log(this.state.child)
        // window.location.reload()
    }

    render() {
        const handleChange = (e) => {
            const value =  Number(e.target.value);
            console.log(value)

            this.setState({transactionCoins: value });
        };
        const handleBuy = async (e) => {
            e.preventDefault();

            const ticker = this.state.current_stock.ticker
            const price = Quotes(ticker)

            apis.newStockTransaction({"child": "61f621d3bf24162200bfb993", "shares": this.state.transactionCoins/price, "stock": ticker, "price": price, "action": "bought"})
                .catch((err) => console.log(err));
            window.location.reload()
        };
        const handleSell = async (e) => {
            e.preventDefault();

            const ticker = this.state.current_stock.ticker
            const price = Quotes(ticker)

            apis.newStockTransaction({"child": "61f621d3bf24162200bfb993", "shares": this.state.transactionCoins/price, "stock": ticker, "price": price, "action": "sold"})
                .catch((err) => console.log(err));
            window.location.reload()
        };

        const stocks = this.state.stocks
        const current_stock = this.state.current_stock
        const current_shares = this.state.current_shares
        const stocks_render = [];

        if(stocks[0])
            console.log('DAWJDNJKAWD',stocks[0].name)
        for (let i = 0; i < stocks.length; ++i) {
            let icon_render = <FontAwesomeIcon icon={faApple} />
            if (stocks[i].name === "Apple") {
                icon_render = <FontAwesomeIcon icon={faApple} />
            }
            else if (stocks[i].name === "Google") {
                icon_render = <FontAwesomeIcon icon={faGoogle} />
            }
            else if (stocks[i].name === "Amazon") {
                icon_render = <FontAwesomeIcon icon={faAmazon} />
            }
            else if (stocks[i].name === "Facebook") {
                icon_render = <FontAwesomeIcon icon={faFacebook} />
            }
            else if (stocks[i].name === "Tesla") {
                icon_render = <img src={tesla} alt="logo"/>
            }
            else if (stocks[i].name === "GameStop") {
                icon_render = <p>GME</p>
            }
            else if (stocks[i].name === "Coca-Cola") {
                icon_render = <img src={cocacola} alt="logo"/>
            }
            else if (stocks[i].name == "McDonald's") {
                icon_render = <img src={mcdonalds} alt="logo"/>
            }
            else if (stocks[i].name === "Nike") {
                icon_render = <img src={nike} alt="logo"/>
            }
            else if (stocks[i].name === "Disney") {
                icon_render = <img src={disney} alt="logo"/>
            }
            else if (stocks[i].name === "Netflix") {
                icon_render = <img src={netflix} alt="logo"/>
            }
            stocks_render.push(
                <li onClick={() => {this.handleChangeStock(i)}} key={i}>{icon_render}<h4>{stocks[i].name}</h4><h4 className={(NetReturn(stocks[i].ticker) < 0) ? "negative" : "positive"}>{(NetReturn(stocks[i].ticker) > 0) ? "+" : ""}{Math.round(NetReturn(stocks[i].ticker)/Quotes(stocks[i].ticker) * 10000) / 100}%</h4></li>
            );
        }
        
        let chart = <GOOGLchart />

        if (current_stock.name == "Apple") {
            chart = <APPLchart />
        }
        else if (current_stock.name == "Google") {
            chart = <GOOGLchart />
        }
        else if (current_stock.name == "Facebook") {
            chart = <FBchart />
        }
        else if (current_stock.name == "Tesla") {
            chart = <TSLAchart />
        }
        else if (current_stock.name == "GameStop") {
            chart = <GMEchart />
        }
        else if (current_stock.name == "Coca-Cola") {
            chart = <KOchart />
        }
        else if (current_stock.name == "McDonald's") {
            chart = <MCDchart />
        }
        else if (current_stock.name == "Nike") {
            chart = <NKEchart />
        }
        else if (current_stock.name == "Disney") {
            chart = <DISchart />
        }
        else if (current_stock.name == "Netflix") {
            chart = <NFLXchart />
        }
            

        return (
            <div className="main-container">
                <Link to='/'><h4 className="title">EduCoin</h4></Link>
                <div className="stat">
                    <img src={Coin} />
                    <h4>{this.state.coins}</h4>
                    <img src={Stock} />
                    <h4>+50</h4>
                </div>
                <h3 style={{ color: "var(--main2)" }}>Invest Coins</h3>
                <div className="invest-sub-container">
                    <div className="companies">
                        <h4>Companies</h4>
                        <ul>
                            {stocks_render}
                        </ul>
                    </div>
                    <div className="company-info">
                        <h4>{current_stock.name}</h4>
                        <div className="graph">
                            {chart} 
                        </div>
                        <div className="company-bio">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share Price:&nbsp; <span>{Quotes(current_stock.ticker)}</span></h4>
                            <h4>Shares Owned: &nbsp;<span>{current_shares}</span></h4>
                            <h4>Coins Invested:&nbsp; <span>{Math.round(current_shares * Quotes(current_stock.ticker) * 100) / 100}</span></h4>
                        </div>
                        <form>
                        <label>Coins:</label>
                            <input
                                name="transaction"
                                onChange={handleChange}
                                id="numCoins"
                                type="text"
                                required
                            ></input>
                        <div className="invest-buttons">
                            <button id="buy" onClick={handleBuy}><h4>Buy</h4></button>
                            <button id="sell" onClick={handleSell}><h4>Sell</h4></button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Invest;
