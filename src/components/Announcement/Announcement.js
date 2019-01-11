import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { gameActions } from './../../actions';
import { connect } from 'react-redux';
// components
import AnnouncementBackdrop from './AnnouncementBackdrop';
import AnnouncementMessage from './AnnouncementMessage';
import AnnouncementModal from './AnnouncementModal';

const Button = styled.button`
  width: 100px;
  height: 30px;
  outline: none;
  border: 2px solid white;
  background: transparent;
  color: white;
  &:hover {
    border: none;
    background: white;
    color: black;
  }
`;

class Announcement extends Component {
  startGame = () => {
    const { startGame, playSequence } = this.props.actions;
    startGame();
    playSequence();
  };

  render = () => {
    return (
      <AnnouncementBackdrop>
        <AnnouncementModal>
          <AnnouncementMessage>
            message here
            <Button onClick={this.startGame}>Play Again!</Button>
          </AnnouncementMessage>
        </AnnouncementModal>
      </AnnouncementBackdrop>
    );
  };
}

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(Announcement);
