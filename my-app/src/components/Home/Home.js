import React from "react";
import "./Home.css";

function Home (props){
    return(
        <nav>
            <ul>
                <li className="brand animated lightSpeedIn">
                    <a href="/ClickyGame">{props.title}</a>
                </li>

                <li id="ci">{props.correctincorrect}</li>

                <li id="score">Score: {props.score}</li>

                {/* <li id="top">Top Score: {props.topScore}</li> */}
            </ul>
        </nav>
    )
}

export default Home;

















