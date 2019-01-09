import React, { Component } from 'react';
import { Simon, sequence } from './Simon';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { matchActions } from './actions/MatchActions';
// components
import Pad from './components/Pad';

class App extends Component {
  constructor() {
    super();
    this.simon = new Simon();
  }

  componentDidMount = () => {};

  handleClick = e => {};

  // change active pad
  changePad = color => {};

  // show user new sequence
  playSequence = async seq => {};

  render = () => {
    const { colors } = this.simon;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          {colors.slice(0, 2).map((color, i) => (
            <Pad
              key={i}
              color={color}
              onClick={this.handleClick}
              data-color={color}
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
            />
          ))}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { sequence } = state.match;
  return { sequence };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(matchActions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
