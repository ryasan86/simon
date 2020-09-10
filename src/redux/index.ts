import { combineReducers } from 'redux'
import { sample } from 'lodash'

import { colors } from '../globals'
import {
    START_GAME,
    END_GAME,
    RESET_GAME,
    GUESS_COLOR,
    SEQUENCE_ON,
    SEQUENCE_OFF,
    NEXT_LEVEL,
    ACTIVE_PAD
} from './types'

const INITIAL_STATE = {
    playingSequence: false,
    gameOver: true,
    started: false,
    score: 0,
    activePad: '',
    sequence: [sample(colors)],
    guessed: [],
    highScore: 0
}

const GameReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case START_GAME:
            return {
                ...state,
                gameOver: false,
                score: 0,
                started: true,
                guessed: [],
                sequence: state.sequence
            }
        case GUESS_COLOR:
            return {
                ...state,
                guessed: [...state.guessed, payload.guess]
            }
        case NEXT_LEVEL:
            return {
                ...state,
                score: state.score + 1,
                guessed: [],
                sequence: [...state.sequence, sample(colors)]
            }
        case SEQUENCE_ON:
            return {
                ...state,
                playingSequence: true
            }
        case SEQUENCE_OFF:
            return {
                ...state,
                playingSequence: false,
                activePad: ''
            }
        case ACTIVE_PAD:
            return {
                ...state,
                activePad: payload.color
            }
        case END_GAME:
            return {
                ...INITIAL_STATE,
                gameOver: true,
                highScore: state.highScore
            }
        case RESET_GAME:
            return INITIAL_STATE
        default:
            return state
    }
}

export default combineReducers({
    game: GameReducer
})
