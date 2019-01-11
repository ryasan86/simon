import { sound1, sound2, sound3, sound4 } from './audios';

export const colors = ['red', 'blue', 'green', 'yellow'];

export const colorObj = {
  red: {
    color: 'red',
    audioUrl: sound1
  },
  blue: {
    color: 'blue',
    audioUrl: sound2
  },
  yellow: {
    color: 'yellow',
    audioUrl: sound3
  },
  green: {
    color: 'green',
    audioUrl: sound4
  }
};

export const SEQUENCE_DELAY = 200;
export const NEXT_LEVEL_DELAY = 1000;
export const GITHUB_REPO_URL = 'https://github.com/ryasan86/simon';
