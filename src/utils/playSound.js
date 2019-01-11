const playSound = audioUrl => {
  let audio = new Audio(audioUrl);
  audio.play()
};

export { playSound };
