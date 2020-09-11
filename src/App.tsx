import React, { useEffect, useReducer, Reducer, useCallback } from 'react'

import Navbar from './components/Navbar'
import Modal from './components/Modal'
import PadsComponent from './components/Pads'
import { App } from './styles'
import { random, idle } from './utils'
import { ActionProps, StateProps } from './interfaces'
import { nextLevelDelay, sequenceDelay, colors } from './constants'
import {
    START_GAME,
    END_GAME,
    RESET_GAME,
    NEXT_LEVEL,
    GUESS,
    TOGGLE_PLAYING_SEQUENCE,
    SCORE_POINT
} from './action-types'

const initialState = {
    playingSequence: false,
    gameOver: true,
    started: false,
    score: 0,
    sequence: [random(colors)],
    guessed: [],
    highScore: 0
}

const reducer = (state: StateProps, action: ActionProps) => {
    const { type, payload } = action

    switch (type) {
        case START_GAME:
            return {
                ...state,
                started: true,
                gameOver: false
            }
        case END_GAME:
            return {
                ...state,
                gameOver: true,
                highScore: payload > state.highScore ? payload : state.highScore
            }
        case NEXT_LEVEL:
            return {
                ...state,
                sequence: [...state.sequence, random(colors)],
                guessed: []
            }
        case GUESS:
            return {
                ...state,
                guessed: [...state.guessed, payload]
            }
        case TOGGLE_PLAYING_SEQUENCE:
            return {
                ...state,
                playingSequence: !state.playingSequence
            }
        case SCORE_POINT:
            return {
                ...state,
                score: state.score + 1,
                highScore:
                    state.score + 1 >= state.highScore
                        ? state.score + 1
                        : state.highScore
            }
        case RESET_GAME:
            return { ...initialState, highScore: state.highScore }
        default:
            return state
    }
}

const AppComponent: React.FC = () => {
    const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(reducer, initialState) // prettier-ignore
    const { gameOver, started, guessed, sequence, highScore } = state // prettier-ignore

    const prepareNextLevel = async (delay, type) => {
        await idle(delay).then(() => dispatch({ type }))
    }

    const checkWin = useCallback(() => {
        if (sequence.every((c, i) => c === guessed[i])) {
            prepareNextLevel(sequenceDelay, SCORE_POINT)
            prepareNextLevel(nextLevelDelay, NEXT_LEVEL)
            return null
        }
        const tail = guessed.length - 1
        if (guessed[tail] !== sequence[tail]) {
            dispatch({ type: END_GAME })
        }
    }, [guessed, sequence])

    useEffect(() => {
        if (guessed.length && started) checkWin()
    }, [guessed, started, checkWin])

    return (
        <App>
            <Modal state={state} dispatch={dispatch} />
            <App.Main gameOver={started && gameOver}>
                <Navbar state={state} dispatch={dispatch} />
                <App.HighScore>High Score: {highScore}</App.HighScore>
                <PadsComponent state={state} dispatch={dispatch} />
            </App.Main>
        </App>
    )
}

export default AppComponent
