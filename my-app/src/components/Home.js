import React from "react";
import "./Home.css";

function Home(){
    return(
        <div> 
            <nav className="navbar">
                <ul>
                    <li className="game">
                        <a href="/">Rocko's Clicky Game</a>
                    </li>
                    <li className="instruction">Click an image to begin!</li>
                    <ul>
                        <li className="Score">Score:0 | Top Score: 0</li>
                        
                    </ul>
                </ul> 
            </nav>
            <header className="header">
                <h1>Rocko's Modern Life</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
            <main className="container">

            </main>
            <footer className="footer">
                <div className="bottom">
                    
                </div>
            </footer>
        </div>
    );
}



















export default Home;