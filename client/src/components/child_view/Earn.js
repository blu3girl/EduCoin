import '../../stylesheets/child/earn.css'
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg"
import apis from '../../api'

const { Component } = require("react");

class Earn extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
    }

    componentDidMount = async () => {
        await apis.getChildTasks("61f621d3bf24162200bfb993")
                .then((res) => this.setState({tasks: res.data.data}))
                .catch((err) => console.log(err))
    }


    render() {
        const tasks = this.state.tasks
        const to_do = []
        const pending = []
        const completed = []
        tasks.forEach(task => {
            if (task.status == "assigned") {
                to_do.push(<li>{task.name}-{task.coins}</li>)
            }
            else if (task.status == "completed") {
                pending.push(<li>{task.name}-{task.coins}</li>)
            }
            else if (task.status == "accepted") {
                completed.push(<li>{task.name}-{task.coins}</li>)
            }
        })
        return(
        <div className="main-container">
            <h4 className="title">EduCoin</h4>
            <div className='stat'>
                <img src={Coin}/><h4>500</h4>
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