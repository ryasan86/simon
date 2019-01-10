import React, { Component } from 'react';
import { colors, sleep, SEQUENCE_DELAY, NEXT_LEVEL_DELAY } from './globals';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gameActions } from './actions';
// components
import Pad from './components/Pad';

class App extends Component {
  componentDidMount = () => {
    this.startGame();
  };

  // start game then play pad sequence
  startGame = () => {
    this.props.actions.startGame();
    this.playSequence();
  };

  // play pad
  playPad = async pad => {
    this.props.actions.activePad(pad);
    await sleep(SEQUENCE_DELAY);
    this.props.actions.activePad('');
    return sleep(SEQUENCE_DELAY);
  };

  // play sequence of pads with delay in between
  playSequence = async () => {
    const {
      actions: { sequenceOn, sequenceOff, activePad },
      match: { sequence }
    } = this.props;

    sequenceOn();
    for (let i = 0; i < sequence.length; i++) {
      await this.playPad(sequence[i]);
    }
    activePad('');
    sequenceOff();
  };

  handleClick = async e => {
    const { color } = e.target.dataset;
    const { game, actions } = this.props;
    !game.playingSequence && (await actions.guessColor(color));
    this.playPad(color);
    this.checkWin();
  };

  checkWin = async () => {
    const { sequence, guessed } = this.props.match;
    const length = guessed.length - 1;
    // if current guess is the same color as position in sequence
    if (sequence[length] === guessed[length]) {
      // if current guess is the last item played in sequence go to next level
      if (sequence.length === guessed.length) {
        this.props.actions.nextLevel();
        sleep(NEXT_LEVEL_DELAY).then(() => this.playSequence());
      }
    } else {
      console.log('sorry try again!');
    }
  };

  render = () => {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {colors.slice(0, 2).map((color, i) => (
            <Pad
              key={i}
              color={color}
              onClick={this.handleClick}
              data-color={color}
              active={this.props.game.activePad === color}
            />
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {colors.slice(2, 4).map((color, i) => (
            <Pad
              key={i}
              color={color}
              onClick={this.handleClick}
              data-color={color}
              active={this.props.game.activePad === color}
            />
          ))}
        </div>
        <div>
          <h1>{this.props.game.score}</h1>
        </div>
      </div>
    );
  };
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(App);
