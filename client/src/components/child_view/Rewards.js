import "../../stylesheets/child/rewards.css";
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
import apis from '../../api'
import { Link } from 'react-router-dom'

const { Component } = require("react");
class Rewards extends Component {
    constructor() {
        super();
        this.state = {
            rewards: [],
            child: {}
        }
    }

    componentDidMount = async () => {
        await apis.getChildById("61f621d3bf24162200bfb993")
                  .then((res) => this.setState({child: res.data.data}))
                  .catch((err) => console.log(err))

        await apis.getRewards()
                  .then((res) => this.setState({rewards: res.data.data}))
                  .catch((err) => console.log(err))
    }

    handleRewardClick = async (rewardsID) => {
        console.log(rewardsID)
        // event.preventDefault()
        // await apis.createRewardRequest({reward: rewardsID, child: this.state.child._id, status: "completed"})
        //           .then((res) => console.log("clicked"))
        //           .catch((err) => console.log(err))
    }
    
    render() {
        const child = this.state.child
        const rewards = this.state.rewards
        const stuff = [];

        for (let i = 0; i < rewards.length; ++i) {
            stuff.push(
                <div key={i} className="reward-container" onClick={this.handleRewardClick(rewards[i]._id)}>
                    <h4 id={"content"}>{rewards[i].name}</h4>
                    <div className="reward-footer">
                        <img src={Game} />
                        <div>
                            <img src={Coin} />
                            <h4>{rewards[i].coins}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="main-container">
                <Link to='/'><h4 className="title">EduCoin</h4></Link>
                <div className="stat">
                    <img src={Coin} />
                    <h4>{child.coins}</h4>
                    <img src={Stock} />
                    <h4>+50</h4>
                </div>
                <h3 style={{ color: "var(--main3)" }}>Use Coins</h3>
                <h4 style={{ textAlign: "center" }}>Rewards</h4>
                <div className="rewards-container">{stuff}</div>
            </div>
        );
    }
}
export default Rewards;
