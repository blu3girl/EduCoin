import "../../stylesheets/parent/home.css";
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg";
import { Link } from "react-router-dom";

const { Component } = require("react");

class ParentHome extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="parent-main-container">
                <div className="navbar">
                    <h4 className="title">EduCoin</h4>
                    <ul className="tabs">
                        <Link to="/parent">
                            <li>Children</li>
                        </Link>
                        <Link to="/parent/tasks">
                            <li>Tasks</li>
                        </Link>
                        <Link to="/parent/rewards">
                            <li>Rewards</li>
                        </Link>
                    </ul>
                    <div className="navbar-footer">
                        Copyright © 2020
                        <br />
                        TAMU Hack
                    </div>
                </div>

                <div className="parent-sub-container">
                    <h4>Your Children</h4>
                    <div className="child-card-container">
                        <div className="child-card">
                            <h4>Reo Matsuda</h4>
                            <img src={Lion} />
                            <div className="child-coin">
                                <img src={Coin} />
                                <span>Coins: 1000</span>
                            </div>
                            <div className="child-buttons">
                                <button>View Log</button>
                                <button>Edit</button>
                            </div>
                        </div>
                        <div className="child-card">
                            <h4>Paul Hinh</h4>
                            <img src={Lion} />
                            <div className="child-coin">
                                <img src={Coin} />
                                <span>Coins: 10</span>
                            </div>
                            <div className="child-buttons">
                                <button>View Log</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                    <h4>Add new child</h4>
                    <button id="addChild">+</button>
                </div>
            </div>
        );
    }
}
export default ParentHome;
