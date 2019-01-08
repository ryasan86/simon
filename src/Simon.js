const sequence = [];
const guessed = [];

class Simon {
  constructor() {
    this.colors = ['red', 'blue', 'green', 'yellow'];
  }

  // pick random color
  randomColor = () => {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  };

  // add to existing sequence of colors
  addToSequence = color => {
    sequence.push(color);
  };

  // pause between pad flashes
  sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // check pressed
  checkPressed = pressed => {
    return sequence.shift() === pressed;
  };
}

export { sequence, guessed, Simon };
