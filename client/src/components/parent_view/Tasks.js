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
import apis from '../../api'

const { Component } = require("react");

class ParentTasks extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            tasks: []
        }
    }

    componentDidMount = async () => {
        await apis.getChildTasks("61f621d3bf24162200bfb993")
                .then((res) => this.setState({tasks: res.data.data}))
                .catch((err) => console.log(err))
    }

    handleDelete = (id) => {
        console.log("oh no deleting")
        console.log(id)
        apis.deleteTask(id)
        window.location.reload()  
    }

    render() {
        const tasks = this.state.tasks
        var cards = [];

        for (let i = 0; i < tasks.length; i++) {
            cards.push(
                <div className="parent-task-card">
                    <h4>{tasks[i].name}</h4>
                    <p>{tasks[i].description}</p>
                    <div className="task-footer">
                        <div className="task-time">
                            <img src={Clock} />
                            <span>5pm</span>
                        </div>
                        <div className="task-cost">
                            <img src={Coin} />
                            <span>{tasks[i].coins}</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit">Edit</button>
                            <button id="delete" onClick={() => {this.handleDelete(tasks[i]._id);}}>Delete</button>
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
