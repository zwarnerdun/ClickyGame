import React, {Component} from 'react';
import Home from "./components/Home"
import Title from "./components/Title/Title";
import FriendCard from "./components/Friends/Friendscard";
import rockofriends from "./rockosfriends.json";
import Container from "./Container";
import Row from "./Row";
import colomn from "./colomn";
import "./App.css"

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topscore: 0,
    rightwrong: "",
    clicked: []
  };



export default App;
