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

const { Component } = require("react");

class Invest extends Component {
    constructor() {
        super();
    }

    render() {
        const stuff = [];

        for (var i = 0; i < 10; ++i) {
            stuff.push(
                <div className="reward-container">
                    <h4 id={"content"}>30 minutes on xbox</h4>
                    <div className="reward-footer">
                        <img src={Game} />
                        <div>
                            <img src={Coin} />
                            <h4>250</h4>
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
                    <h4>500</h4>
                    <img src={Stock} />
                    <h4>+50</h4>
                </div>
                <h3 style={{ color: "var(--main2)" }}>Invest Coins</h3>
                <h4 style={{ textAlign: "center" }}>Rewards</h4>
                <div className="rewards-container">{}</div>
            </div>
        );
    }
}
export default Invest;