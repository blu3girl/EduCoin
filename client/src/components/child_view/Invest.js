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
import { faApple } from '@fortawesome/free-brands-svg-icons'
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


const { Component } = require("react");

class Invest extends Component {
    constructor() {
        super();
    }

    render() {
        const stuff = [];

        for (var i = 0; i < 10; ++i) {
            stuff.push(
                <li key={i}><FontAwesomeIcon icon={faApple} /><h4>Google</h4><h4 className="net">+0.5</h4></li>
            );
        }

        return (
            <div className="main-container">
                <Link to='/'><h4 className="title">EduCoin</h4></Link>
                <div className="stat">
                    <img src={Coin} />
                    <h4>500</h4>
                    <img src={Stock} />
                    <h4>+50</h4>
                </div>
                <h3 style={{ color: "var(--main2)" }}>Invest Coins</h3>
                <div className="invest-sub-container">
                    <div className="companies">
                        <h4>Companies</h4>
                        <ul>
                            {stuff}
                        </ul>
                    </div>
                    <div className="company-info">
                        <h4>Google</h4>
                        <div className="graph">
                        <APPLchart />
                        </div>
                        <div className="company-bio">
                            <h4>Own:100</h4>
                            <h4>Buy Price:100</h4>
                            <h4>Current Price:100</h4>
                        </div>
                        <div className="invest-buttons">
                            <button id="buy"><h4>Buy</h4></button>
                            <button id="sell"><h4>Sell</h4></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Invest;
