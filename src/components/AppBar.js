import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gameActions } from './../actions';
import logo from './../ghlogo.svg';
import { GITHUB_REPO_URL } from '../globals';
// components
import { Button, Logo, AppBarWrapper } from './common';

class AppBar extends Component {
  render = () => {
    return (
      <AppBarWrapper>
        <Button>Start</Button>
        <a href={GITHUB_REPO_URL}>
          <Logo src={logo} alt="github" />
        </a>
      </AppBarWrapper>
    );
  };
}

export default connect(state => state,   dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(AppBar);
