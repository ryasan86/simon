import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gameActions } from './../actions';
import { GH_ICON } from './../images';
import { GITHUB_REPO_URL, NEXT_LEVEL_DELAY } from '../globals';
import { sleep } from './../utils';
// components
import { Button, Logo, AppBarWrapper } from './common';

class AppBar extends Component {
  startGame = async () => {
    const { startGame, playSequence } = this.props.actions;
    await sleep(NEXT_LEVEL_DELAY);
    startGame();
    playSequence();
  };

  resetGame = () => {
    this.props.actions.resetGame();
  };

  renderButton = () => {
    const { gameOver, started, playingSequence } = this.props;
    if (gameOver && !started) {
      return <Button onClick={this.startGame}>Start</Button>;
    } else {
      return (
        <Button onClick={this.resetGame} disabled={playingSequence}>
          Reset
        </Button>
      );
    }
  };

  render = () => {
    return (
      <AppBarWrapper>
        {this.renderButton()}
        <a href={GITHUB_REPO_URL}>
          <Logo src={GH_ICON} alt="github" />
        </a>
      </AppBarWrapper>
    );
  };
}

export default connect(
  state => state.game,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(AppBar);