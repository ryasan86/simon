import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { gameActions } from './../actions';
import { connect } from 'react-redux';
// components
import {
  ModalBackdrop,
  ModalContainer,
  ModalMessage,
  Button
} from './common';

class Announcement extends Component {
  startGame = () => {
    const { startGame, playSequence } = this.props.actions;
    startGame();
    playSequence();
  };

  render = () => {
    return (
      <ModalBackdrop>
        <ModalContainer>
          <ModalMessage>
            Message Here
            <Button onClick={this.startGame}>Play Again!</Button>
          </ModalMessage>
        </ModalContainer>
      </ModalBackdrop>
    );
  };
}

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(Announcement);
