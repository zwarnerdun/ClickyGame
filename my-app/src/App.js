import React, {Component} from 'react';
import Home from "./components/Home"
import Title from "./components/Title/Title";
import FriendCard from "./components/Friends/Friendscard";
import rockofriends from "./rockosfriends.json";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
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

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      correctincorrect: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ correctincorrect: "That was a hoot!" });
    }

    this.handleShuffle();
  };
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      correctincorrect: "Heh heh, oh my...",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(rockofriends);
    this.setState({ rockofriends: shuffledFriends });
  };
  
  render() {
    return (
      <div>
        <Home
          title="Rocko's Modern Life"
          score={this.state.score}
          topscore={this.state.topScore}
          correctincorrect={this.state.correctincorrect}
        />

        <Title>
         Do not click on a duplicate, or you'll have a fit!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={rockofriends.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={rockofriends.id}
                  image={rockofriends.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
