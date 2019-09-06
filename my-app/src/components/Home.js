import React from "react";
import "./Home.css";

const Home = () => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/">{this.props.title}</a>
            </li>

            <li id="rw">{this.props.correctincorrect}</li>

            <li id="score">Score: {this.props.score}</li>

            <li id="top">Top Score: {this.props.topScore}</li>
        </ul>
    </nav>
)

export default Home;

















