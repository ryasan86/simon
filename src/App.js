import React, { Component } from 'react';

class App extends Component {

  state = {
    sequence: []
  }

  handleClick = (e) => {
    const { value } = e.target, { sequence } = this.state;
    sequence.push(+value);
    this.setState({ sequence });
  };

  render = () => {
    return (
      <div>
        <div>
        <button onClick={this.handleClick} value={0}>0</button>
        <button onClick={this.handleClick} value={1}>1</button>
        <button onClick={this.handleClick} value={2}>2</button>
        <button onClick={this.handleClick} value={3}>3</button>
        </div>
        <div>
        <p>{this.state.sequence}</p>
        </div>
      </div>
    );
  };
}

export default App;
