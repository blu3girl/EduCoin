import "../../stylesheets/parent/tasks.css";
import {
    ArrowUp,
    Coin,
    Lion,
    Stock,
    TaskList,
    Gift,
    Investment,
    Clock,
} from "../svg";
import { Link } from "react-router-dom";

const { Component } = require("react");

class ParentTasks extends Component {
    constructor() {
        super();
    }

    render() {
        var cards = [];

        for (var i = 0; i < 10; ++i) {
            cards.push(
                <div className="parent-task-card">
                    <h4>Wash the dog</h4>
                    <p>
                        Wash the dog with shampoo and conditioner and also feed
                        the dog.
                    </p>
                    <div className="task-footer">
                        <div className="task-time">
                            <img src={Clock} />
                            <span>5pm</span>
                        </div>
                        <div className="task-cost">
                            <img src={Coin} />
                            <span>500</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit">Edit</button>
                            <button id="delete">Delete</button>
                        </div>
                    </div>
                </div>
            );
        }

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

                <div className="parent-task-sub-container">
                    <div className="child-selector">
                        <h4>Child:</h4>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">
                                Coconut
                            </option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className="task-header">
                        <h4>Tasks:</h4>
                        <button>Add</button>
                    </div>
                    <div className="parent-task-card-container">{cards}</div>
                </div>
            </div>
        );
    }
}
export default ParentTasks;