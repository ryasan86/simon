import React, { Component, Fragment } from 'react';
import { colors, colorObj, SEQUENCE_DELAY, NEXT_LEVEL_DELAY } from './globals';
import { sleep, playSound } from './utils';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gameActions } from './actions';
// components
import PadBank from './components/Pads/PadBank';
import Score from './components/Score/Score';
import FlexContainer from './components/common/FlexContainer';

class App extends Component {
  componentDidMount = () => {
    this.startGame();
  };

  // start game then play pad sequence
  startGame = () => {
    this.props.actions.startGame();
    this.playSequence();
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

  // play sequence of pads with delay between levels
  playSequence = async () => {
    const {
      actions: { sequenceOn, sequenceOff, activePad },
      match: { sequence }
    } = this.props;

    sequenceOn();
    for (let i = 0; i < sequence.length; i++) {
      await this.playPad(colorObj[sequence[i]]);
    }
    activePad('');
    sequenceOff();
  };

  // pad click
  handleClick = async e => {
    const { color: guess } = e.target.dataset;
    const { game, actions } = this.props;
    !game.playingSequence && (await actions.guessColor({ guess }));
    this.playPad(colorObj[guess]);
    this.checkWin();
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
        sleep(NEXT_LEVEL_DELAY).then(() => this.playSequence());
      }
    } else {
      console.log('sorry try again!');
    }
  };

  render = () => {
    return (
      <Fragment>
        <FlexContainer>
          <PadBank pads={colors.slice(0, 2)} handleClick={this.handleClick} />
          <Score score={this.props.game.score} />
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
