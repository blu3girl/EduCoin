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
    WhiteGame,
} from "../svg";
import { Link } from "react-router-dom";
import apis from "../../api";

const { Component } = require("react");

class ParentRewards extends Component {
    constructor() {
        super();

        this.state = {
            rewards: [],
        };
    }

    componentDidMount() {
        this.getRewards();
    }

    getRewards() {
        apis.getAllRewards().then((res) =>
            this.setState({ rewards: res.data.data })
        );
    }

    render() {
        const { rewards } = this.state;

        var cards = [];

        rewards.forEach((reward) => {
            cards.push(
                <div className="parent-task-card reward">
                    <h4>{reward.name}</h4>
                    <div className="task-footer reward">
                        <div className="task-time">
                            <img src={WhiteGame} />
                        </div>
                        <div className="task-cost">
                            <img src={Coin} />
                            <span>{reward.coins}</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit">Edit</button>
                            <button
                                id="delete"
                                onClick={async () => {
                                    if (
                                        window.confirm(
                                            `Delete ${reward.name}?`
                                        ) == true
                                    ) {
                                        await apis.deleteRewardById(reward._id);
                                        this.getRewards();
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

        if(cards.length === 0) {
            cards.push(
                <div className="parent-task-card reward">
                    <h4>No rewards assinged!</h4>
                    <div className="task-footer reward">
                        <div className="task-buttons">
                        </div>
                    </div>
                </div>
            )
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
                    <div className="task-header">
                        <h4>Rewards:</h4>
                        <Link to="/parent/rewards/create">
                            <button>Add</button>
                        </Link>
                    </div>
                    <div className="parent-task-card-container">{cards}</div>
                </div>
            </div>
        );
    }
}
export default ParentRewards;
