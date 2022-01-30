import "../../stylesheets/parent/home.css";
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg";
import { Link } from "react-router-dom";
import apis from "../../api";

const { Component } = require("react");

class ParentHome extends Component {
    constructor() {
        super();

        this.state = {
            children: [],
        };
    }

    componentDidMount() {
        this.getChildren();
    }

    getChildren() {
        fetch("http://localhost:3001/api/children")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ children: res.data });
            });
    }

    render() {
        const { children } = this.state;
        const childrenArr = [];

        children.forEach((child) => {
            childrenArr.push(
                <div className="child-card">
                    <h4>{child.name}</h4>
                    <img src={Lion} />
                    <div className="child-coin">
                        <img src={Coin} />
                        <span>Coins: {child.coins}</span>
                    </div>
                    <div className="child-buttons">
                        <button>View Log</button>
                        <button
                            id="delete"
                            onClick={async () => {
                                if (window.confirm(`Delete ${child.name}?`) == true) {
                                    await apis.deleteChildById(child._id);
                                    this.getChildren();
                                }
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            );
        });

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
                    <div className="child-card-container">{childrenArr}</div>
                    <h4>Add new child</h4>
                    <Link to="/parent/child/create">
                        <button id="addChild">+</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default ParentHome;
