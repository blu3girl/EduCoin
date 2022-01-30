import '../../stylesheets/child/earn.css'
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg"
import apis from '../../api'
import { Link } from 'react-router-dom'

const { Component } = require("react");

class Earn extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            coins: 500
        }
    }

    componentDidMount = async () => {
        await apis.getChildTasks("61f621d3bf24162200bfb993")
                .then((res) => this.setState({tasks: res.data.data}))
                .catch((err) => console.log(err))
        await apis.getChildById("61f621d3bf24162200bfb993")
                .then((res) => this.setState({coins: res.data.data.coins}))
                .catch((err) => console.log(err))
    }


    render() {
        const tasks = this.state.tasks
        const to_do = []
        const pending = []
        const completed = []
        tasks.forEach(task => {
            if (task.status == "assigned") {
                to_do.push(<li>{task.name}
                <div className="task-footer">
                        <div className="task-cost">
                            <img src={Coin} />
                            <span>{task.coins}</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit" class="complete" onClick={async () => {
                                    await apis.completeTask(task._id);
                                    await apis.updateChildCoins({id:"61f621d3bf24162200bfb993", coins: task.coins})
                                    window.location.reload();
                                }}>Complete</button>
                        </div>
                    </div>
                </li>)
            }
            else if (task.status == "completed") {
                pending.push(<li>{task.name}
                    <div className="task-footer">
                            <div className="task-cost">
                                <img src={Coin} />
                                <span class="green">{task.coins}</span>
                            </div>
                        </div>
                    </li>)
            }
            else if (task.status == "accepted") {
                completed.push(<li>{task.name}-{task.coins}</li>)
            }
        })
        return(
        <div className="main-container">
            <Link to='/'><h4 className="title">EduCoin</h4></Link>
            <div className='stat'>
                <img src={Coin}/><h4>{this.state.coins}</h4>
                <img src={Stock}/><h4>+50</h4>
            </div>
            <h3 style={{color: 'var(--main2)'}}>Earn Coins</h3>
            <div className='lists-sub-container'>
                <div className='list'>
                    <h4>Tasks To Do</h4>
                    <ul>
                        {to_do}
                    </ul>
                </div>
                <div className='list'>
                    <h4>Tasks Completed</h4>
                    <ul>
                        {/* probably style differently */}
                        {pending}
                        <li>-----</li>
                        {completed}
                    </ul>
                </div>
            </div>
        </div>
    )}
}
export default Earn;