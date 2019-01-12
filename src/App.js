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
import { FlexContainer, PadsContainer } from './components/common';

class App extends Component {
  // play pad animation and sound with delay between pads
  playPad = async pad => {
    const { color, audioUrl } = pad;
    playSound(audioUrl);
    this.props.actions.activePad({ color });
    await sleep(SEQUENCE_DELAY);
    this.props.actions.activePad({ color: '' });
    return sleep(SEQUENCE_DELAY);
  };

  handleClick = async e => {
    const { color } = e.target.dataset;
    const { game, actions } = this.props;
    if (!game.playingSequence && !game.gameOver) {
      await actions.guessColor({ guess: color });
      this.playPad(colorObj[color]);
      this.checkWin();
    }
  };

  goNextLevel = async () => {
    const { nextLevel, playSequence } = this.props.actions;
    nextLevel();
    await sleep(NEXT_LEVEL_DELAY);
    playSequence();
  };

  checkWin = () => {
    const { match: sequence, guessed, actions: endGame } = this.props;
    const length = guessed.length - 1;
    // if current guess is the same color as position in sequence
    if (sequence[length] === guessed[length]) {
      // if current guess is the last item played in sequence go to next level
      if (sequence.length === guessed.length) {
        this.goNextLevel();
      }
      // if incorrect color is pressed
    } else {
      endGame();
    }
  };

  // modal pop up when game is over
  renderAnnouncement = () => {
    const { gameOver, started } = this.props.game;
    if (gameOver && started) return <Announcement />;
  };

  render = () => {
    const { score } = this.props.game;

    return (
      <Fragment>
        <FlexContainer>
          {this.renderAnnouncement()}
          <AppBar />
          <PadsContainer>
            <PadBank
              pads={colors.slice(0, 2)}
              handleClick={this.handleClick}
              className="top"
            />
            <Score score={score} />
            <PadBank
              pads={colors.slice(2, 4)}
              handleClick={this.handleClick}
              className="bottom"
            />
          </PadsContainer>
        </FlexContainer>
      </Fragment>
    );
  };
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(App);
