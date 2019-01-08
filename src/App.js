import React, { Component } from 'react';
import { Simon, sequence } from './Simon';
// components
import Pad from './components/Pad';

class App extends Component {
  constructor() {
    super();
    this.simon = new Simon();
    this.state = {
      score: 0,
      activeColor: '',
      sequencePlaying: false
    };
  }

  componentDidMount = () => {
    const { addToSequence, randomColor } = this.simon;
    addToSequence(randomColor());
    this.playSequence(sequence);
  };

  handleClick = e => {
    if (!this.state.sequencePlaying) {
      const { color } = e.target.dataset;
      console.log(color);
    }
  };

  // change active pad
  changePad = color => {
    this.setState({ active: color });
    return this.simon.sleep(500);
  };

  // show user new sequence
  playSequence = async seq => {
    this.setState({ sequencePlaying: true });
    for (let i = 0; i < seq.length; i++) {
      await this.changePad(seq[i]);
    }
    // set active pad to nothing after sequence flash
    await this.changePad('');
    this.setState({ sequencePlaying: false });
  };

  render = () => {
    const { colors } = this.simon;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          {colors.slice(0, 2).map((color, i) => (
            <Pad
              key={i}
              color={color}
              onClick={this.handleClick}
              active={color === this.state.active}
              data-color={color}
            />
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {colors.slice(2, 4).map((color, i) => (
            <Pad
              key={i}
              color={color}
              onClick={this.handleClick}
              active={color === this.state.active}
              data-color={color}
            />
          ))}
        </div>
        <h1>{this.state.score}</h1>
      </div>
    );
  };
}

export default App;
