import React, {
    useEffect,
    useReducer,
    Reducer,
    useState,
    useCallback
} from 'react'
import { colors, soundMap } from './constants'

import AppBar from './components/AppBar'
// import Announcement from './components/Announcement'
import { App, Pads } from './styles'
import { random, sleep, playSound } from './utils'
import { nextLevelDelay, sequenceDelay } from './constants'

const START_GAME = 'START_GAME'
const END_GAME = 'END_GAME'
const RESET_GAME = 'RESET_GAME'
const NEXT_LEVEL = 'NEXT_LEVEL'
const GUESS = 'GUESS'
const TOGGLE_PLAYING_SEQUENCE = 'TOGGLE_PLAYING_SEQUENCE'
const SCORE_POINT = 'SCORE_POINT'

export interface StateProps {
    playingSequence?: boolean
    gameOver?: boolean
    started?: boolean
    score?: number
    sequence?: string[]
    guessed?: string[]
    highScore?: number
}

export type ActionProps = {
    type: string
    payload?: any
}

interface PadsProps extends StateProps {
    dispatch: (args: ActionProps) => void
}

const PadsComponent: React.StatelessComponent<PadsProps> = ({
    dispatch,
    playingSequence,
    score,
    guessed,
    sequence,
    started
}) => {
    const [selected, setSelected] = useState(null)

    const handleClick = (e: MouseEvent) => {
        if (!playingSequence) {
            const { color } = (e.target as HTMLElement).dataset
            dispatch({ type: GUESS, payload: color })
        }
    }

    // toggle active css on pad button
    useEffect(() => {
        if (guessed.length) {
            setSelected(guessed[guessed.length - 1])
            sleep(sequenceDelay).then(() => setSelected(null))
        }
    }, [guessed])

    // play sound whenever the selected color changes
    useEffect(() => {
        if (selected) playSound(soundMap[selected])
    }, [selected])

    // play sequence when game starts or when sequence changes
    useEffect(() => {
        const toggleIsPlaying = () => {
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
        }

        const playSequence = async () => {
            toggleIsPlaying()
            for (const c of sequence) {
                setSelected(c)
                await sleep(sequenceDelay).then(() => setSelected(null))
                await sleep(sequenceDelay)
            }
            toggleIsPlaying()
        }

        if (started) playSequence()
    }, [started, sequence, dispatch])

    return (
        <Pads>
            <Pads.Inner>
                {colors.map((color, i) => (
                    <Pads.Item
                        key={i}
                        active={color === selected}
                        color={color}
                        data-color={color}
                        playingSequence={playingSequence}
                        onClick={handleClick}
                    />
                ))}
                <Pads.Score>{score}</Pads.Score>
            </Pads.Inner>
        </Pads>
    )
}

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
                started: true
            }
        case END_GAME:
            return {
                ...state,
                gameOver: true,
                started: false,
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
                score: state.score + 1
            }
        case RESET_GAME:
            return initialState
        default:
            return state
    }
}

const AppComponent: React.FC = () => {
    const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(reducer, initialState) // prettier-ignore
    const { gameOver, score, started, guessed, sequence, playingSequence, highScore } = state // prettier-ignore

    const startGame = () => {
        dispatch({ type: START_GAME })
    }

    const resetGame = () => {
        dispatch({ type: RESET_GAME })
    }

    const checkWin = useCallback(async () => {
        const tail = guessed.length - 1

        if (sequence.every((c, i) => c === guessed[i])) {
            dispatch({ type: SCORE_POINT })
            await sleep(nextLevelDelay)
            dispatch({ type: NEXT_LEVEL })
        } else if (guessed[tail] !== sequence[tail]) {
            console.log('you lose :(')
        }
    }, [guessed, sequence])

    useEffect(() => {
        if (guessed.length) checkWin()
    }, [guessed])

    return (
        <App>
            {/* {gameOver && started && <Announcement />} */}
            <AppBar
                started={started}
                gameOver={gameOver}
                startGame={startGame}
                resetGame={resetGame}
            />
            <App.HighScore>High Score: {highScore}</App.HighScore>
            <PadsComponent
                score={score}
                dispatch={dispatch}
                playingSequence={playingSequence}
                guessed={guessed}
                sequence={sequence}
                started={started}
            />
        </App>
    )
}

export default AppComponent
