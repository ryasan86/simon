import { SOUND_1, SOUND_2, SOUND_3, SOUND_4 } from './audios';

export const colors = ['red', 'blue', 'green', 'yellow'];

export const colorObj = {
  red: {
    color: 'red',
    audioUrl: SOUND_1,
    class: 'top-left'
  },
  blue: {
    color: 'blue',
    audioUrl: SOUND_2,
    class: 'top-right'
  },
  yellow: {
    color: 'yellow',
    audioUrl: SOUND_3,
    class: 'bottom-right'
  },
  green: {
    color: 'green',
    audioUrl: SOUND_4,
    class: 'bottom-left'
  }
};

export const SEQUENCE_DELAY = 200;
export const NEXT_LEVEL_DELAY = 1000;
export const GITHUB_REPO_URL = 'https://github.com/ryasan86/simon';
