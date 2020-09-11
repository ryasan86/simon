import React, { useEffect, useReducer, Reducer, useCallback } from 'react'

import Navbar from '../components/Navbar'
import PadsComponent from '../components/Pads'
import Modal from '../components/Modal'
import { Board } from '../styles'
import { random, idle } from '../utils'
import { ActionProps, StateProps } from '../interfaces'
import { nextLevelDelay, sequenceDelay, colors } from '../constants'
import {
    START_GAME,
    END_GAME,
    RESET_GAME,
    NEXT_LEVEL,
    GUESS,
    TOGGLE_PLAYING_SEQUENCE,
    SCORE_POINT
} from '../action-types'
import Announcement from '../components/Announcement'

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
            return {
                ...initialState,
                highScore: state.highScore
            }
        default:
            return state
    }
}

interface Props {
    selected: boolean
    onNavigate?: (path: string) => () => void
}

const BoardPage: React.FC<Props> = ({ selected }) => {
    const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(reducer, initialState) // prettier-ignore
    const { gameOver, started, guessed, sequence, highScore, score } = state // prettier-ignore

    const checkWin = useCallback(() => {
        if (
            sequence.length === guessed.length &&
            sequence.every((c, i) => c === guessed[i])
        ) {
            idle(sequenceDelay)
                .then(() => dispatch({ type: SCORE_POINT }))
                .then(() =>
                    idle(nextLevelDelay).then(() =>
                        dispatch({ type: NEXT_LEVEL })
                    )
                )
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
        <Board selected={selected} gameOver={started && gameOver}>
            <Modal state={state} dispatch={dispatch} />
            <Navbar state={state} dispatch={dispatch} />
            <Board.HighScore>High Score: {highScore}</Board.HighScore>
            <PadsComponent state={state} dispatch={dispatch} />
            <Announcement score={score} />
        </Board>
    )
}

export default BoardPage
