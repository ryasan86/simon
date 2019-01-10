export const sleep = (ms = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
export const playSound = audioUrl => {
  const audio = new Audio(audioUrl);
  audio.play();
};

export const createAction = (type, payload = {}) => {
  return { type, payload };
};
