import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addPlayer(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          required
          id="player"
          className="input"
          type="text"
          placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input className="input" type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
