import React from 'react';
import { connect } from 'react-redux';
import Pad from './Pad';

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
          onClick={handleClick}
          data-color={color}
          active={activePad === color}
        />
      ))}
    </div>
  );
};

export default connect(state => state.game)(Pads);
