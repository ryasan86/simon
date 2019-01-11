import React from 'react';
import { connect } from 'react-redux';
import Pad from './Pad';
import { colorObj } from '../globals';

const styles = {
  display: 'flex'
};

const Pads = ({ pads, handleClick, activePad }) => {
  return (
    <div style={styles}>
      {pads.map((color, i) => (
        <Pad
          key={i}
          color={color}
          audioUrl={colorObj[color].audioUrl}
          onClick={handleClick}
          data-color={color}
          active={activePad === color}
        />
      ))}
    </div>
  );
};

export default connect(state => state.game)(Pads);
