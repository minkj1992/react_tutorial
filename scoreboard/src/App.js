import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

class App extends Component {
  state = {
    players: [
      { name: 'LDK', score: 0, id: 0 },
      { name: 'HONG', score: 0, id: 1 },
      { name: 'KIM', score: 0, id: 2 },
      { name: 'PARK', score: 0, id: 3 }
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
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return { players: [...prevState.players] };
    });
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);
      return {
        players: [...prevState.players, { id: maxId + 1, name: name, score: 0 }]
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

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

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
