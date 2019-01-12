import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { gameActions } from './../actions';
import { connect } from 'react-redux';
import { NEXT_LEVEL_DELAY } from '../globals';
import { sleep } from './../utils';
// components
import { ModalBackdrop, ModalContainer, ModalMessage, Button } from './common';

class Announcement extends Component {
  startGame = async () => {
    const { startGame, playSequence } = this.props.actions;
    await sleep(NEXT_LEVEL_DELAY);
    startGame();
    playSequence();
  };

  render = () => {
    return (
      <ModalBackdrop>
        <ModalContainer>
          <ModalMessage>
            Final Score: {this.props.score}
            <Button onClick={this.startGame}>Play Again!</Button>
          </ModalMessage>
        </ModalContainer>
      </ModalBackdrop>
    );
  };
}

export default connect(
  state => state.game,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(Announcement);
