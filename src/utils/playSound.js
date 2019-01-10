const playSound = audioUrl => {
  const audio = new Audio(audioUrl);
  audio.play();
};

export { playSound };
