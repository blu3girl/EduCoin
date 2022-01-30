import '../../stylesheets/child/earn.css'
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg"

const { Component } = require("react");

class Earn extends Component {
    constructor() {
        super()
    }

    render() {
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
                    <h4>Tasks Completed Today</h4>
                    <ul>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                    </ul>
                </div>
                <div className='list'>
                    <h4>Tasks To Do</h4>
                    <ul>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                        <li>Wash the dog</li>
                    </ul>
                </div>
            </div>
        </div>
    )}
}
export default Earn;