import React from 'react';
import { connect } from 'react-redux';
import { colorObj } from '../globals';
// components
import Pad from './Pad';

const Pads = ({ pads, handleClick, activePad }) => {
  return (
    <div style={{ display: 'flex' }}>
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
