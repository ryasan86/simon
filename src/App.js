import React, { Component, Fragment } from 'react';
import { colors, colorObj, SEQUENCE_DELAY, NEXT_LEVEL_DELAY } from './globals';
import { sleep, playSound } from './utils';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gameActions } from './actions';
// components
import AppBar from './components/AppBar';
import PadBank from './components/PadBank';
import Score from './components/Score';
import Announcement from './components/Announcement';
import { FlexContainer } from './components/common';

class App extends Component {

  componentDidMount = () => {
    console.log(this.props.game);
  }

  // start game then play pad sequence
  startGame = () => {
    const { startGame, playSequence } = this.props.actions;
    startGame();
    playSequence();
  };

  // play pad animation and sound with delay between pads
  playPad = async pad => {
    const { color, audioUrl } = pad;
    playSound(audioUrl);
    this.props.actions.activePad({ color });
    await sleep(SEQUENCE_DELAY);
    this.props.actions.activePad('');
    return sleep(SEQUENCE_DELAY);
  };

  // pad click
  handleClick = async e => {
    const { color } = e.target.dataset;
    const { game, actions } = this.props;
    if (game.playingSequence === false) {
      await actions.guessColor({ guess: color });
      this.playPad(colorObj[color]);
      this.checkWin();
    }
  };

  // win / loss
  checkWin = async () => {
    const { sequence, guessed } = this.props.match;
    const length = guessed.length - 1;
    // if current guess is the same color as position in sequence
    if (sequence[length] === guessed[length]) {
      // if current guess is the last item played in sequence go to next level
      if (sequence.length === guessed.length) {
        this.props.actions.nextLevel();
        await sleep(NEXT_LEVEL_DELAY);
        this.props.actions.playSequence();
      }
      // if incorrect color is pressed
    } else {
      this.props.actions.endGame();
    }
  };

  render = () => {
    const { score, gameOver } = this.props.game;

    return (
      <Fragment>
        <FlexContainer>
          <AppBar />
          {gameOver ? <Announcement /> : ''}
          <PadBank pads={colors.slice(0, 2)} handleClick={this.handleClick} />
          <Score score={score} />
          <PadBank pads={colors.slice(2, 4)} handleClick={this.handleClick} />
        </FlexContainer>
      </Fragment>
    );
  };
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(App);
