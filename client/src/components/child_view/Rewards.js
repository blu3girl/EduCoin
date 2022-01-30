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

const { Component } = require("react");
class Rewards extends Component {
    constructor() {
        super();
        this.state = {
            rewards: [],
            child: {}
        }

        this.handleRewardClick = this.handleRewardClick.bind(this)
    }

    componentDidMount = async () => {
        await apis.getChildById("61f621d3bf24162200bfb993")
                  .then((res) => this.setState({child: res.data.data}))
                  .catch((err) => console.log(err))

        await apis.getRewards()
                  .then((res) => this.setState({rewards: res.data.data}))
                  .catch((err) => console.log(err))
    }

    handleRewardClick = async (rewardscoins) => {
        // event.preventDefault()
        this.state.child.coins -= rewardscoins;
        // await apis.updateChildCoins(this.state.child)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))

        console.log(this.state.child)
    }
    
    render() {
        const child = this.state.child
        const rewards = this.state.rewards
        const stuff = [];

        for (let i = 0; i < rewards.length; ++i) {
            stuff.push(
                <div key={i} className="reward-container" onClick={() => this.handleRewardClick(rewards[i].coins)}>
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
                <h4 className="title">EduCoin</h4>
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
