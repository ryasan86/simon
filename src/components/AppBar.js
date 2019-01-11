import React, { Component } from 'react';
import { Button, Logo, AppBarWrapper } from './common';
import logo from './../ghlogo.svg';
import { GITHUB_REPO_URL } from '../globals';

class AppBar extends Component {
  render = () => {
    return (
      <AppBarWrapper>
        <Button>Reset</Button>
        <a href={GITHUB_REPO_URL}>
          <Logo src={logo} alt="github" />
        </a>
      </AppBarWrapper>
    );
  };
}

export default AppBar;
