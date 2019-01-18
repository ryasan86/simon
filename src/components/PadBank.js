import React from 'react';
import { connect } from 'react-redux';
import { colorObj } from '../globals';
// components
import Pad from './Pad';

const Pads = ({ pads, handleClick, activePad, playingSequence }) => {
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
          playingSequence={playingSequence}
          className={colorObj[color].class}
        />
      ))}
    </div>
  );
};

export default connect(state => state.game)(Pads);