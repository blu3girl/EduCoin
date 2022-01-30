import "../../stylesheets/child/home.css";
import { ArrowUp, Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg";
import { Link } from "react-router-dom";
import apis from '../../api'
import axios from 'axios'


const { Component } = require("react");

class Home extends Component {
    constructor() {
        super();
        this.state = {
            child: {}
        }
    }

    componentDidMount = async () => {
        await apis.getChildById("61f621d3bf24162200bfb993")
                  .then((res) => this.setState({child: res.data.data}))
                  .catch((err) => console.log(err))
    }

    render() {
        const child = this.state.child.name
        return (
            <div className="main-container">
                <h4 className="title">EduCoin</h4>
                <div className="sub-container">
                    <div className="profile">
                        <img src={Lion} />
                        <h4>Good morning</h4>
                        <h4 style={{ color: "var(--main3)" }}> {child}</h4>

                        <div className="profile-card">
                            <h4>Your Progress</h4>
                            <div>
                                <img src={Coin} />
                                <h4>500</h4>
                            </div>
                            <div>
                                <img src={Stock} />
                                <h4>+50</h4>
                            </div>
                            <h4>Keep up the good work!</h4>
                        </div>
                    </div>
                    <div className="button-container">
                        <Link to="/earn">
                            <button id={"earn"}>
                                <img src={TaskList} />
                                <h4>Earn Coins</h4>
                            </button>
                        </Link>
                        <Link to="/use">
                            <button id={"use"}>
                                <img src={Gift} />
                                <h4>Use Coins</h4>
                            </button>
                        </Link>
                        <Link to="/invest">
                            <button id={"invest"}>
                                <img src={Investment} />
                                <h4>Invest Coins</h4>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
