import React from 'react';
import Header from './components/Header';
import Player from './components/Player';
import './App.css';

class App extends React.Component {
  state = {
    players: [
      { name: 'LDK', score: 0, id: 1 },
      { name: 'HONG', score: 0, id: 2 },
      { name: 'KIM', score: 0, id: 3 },
      { name: 'PARK', score: 0, id: 4 }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      };
    });
  };

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return { players: [...prevState.players] };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        {this.state.players.map((item, index) => (
          <Player
            name={item.name}
            score={item.score}
            key={item.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore}
            index={index}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
