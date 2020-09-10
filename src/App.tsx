import React, { Fragment, useEffect, useCallback } from 'react'
import { colors, colorObj, SEQUENCE_DELAY, NEXT_LEVEL_DELAY } from './globals'
import { sleep, playSound } from './utils'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from './components/AppBar'
import PadBank from './components/PadBank'
import Score from './components/Score'
import Announcement from './components/Announcement'
import { FlexContainer, PadsContainer } from './components/common'
import { gameActions } from './redux/actions'
import { GameProps, ActionProps } from './interfaces'

const App: React.FC<GameProps & ActionProps> = ({ actions, game }) => {
    const { sequence, guessed, playingSequence, gameOver, score, started } = game // prettier-ignore
    const { onEndGame, onGuessColor, onActivePad, onNextLevel, onPlaySequence } = actions // prettier-ignore

    const playPad = async pad => {
        const { color, audioUrl } = pad
        playSound(audioUrl)
        onActivePad({ color })
        await sleep(SEQUENCE_DELAY)
        onActivePad({ color: '' })
        return sleep(SEQUENCE_DELAY)
    }

    const handleClick = async e => {
        const { color } = e.target.dataset
        if (!playingSequence && !gameOver) {
            await onGuessColor({ guess: color })
            playPad(colorObj[color])
        }
    }

    const goNextLevel = async () => {
        onNextLevel()
        await sleep(NEXT_LEVEL_DELAY)
        onPlaySequence()
    }

    // prettier-ignore
    const checkWin = useCallback((guessed, sequence) => {
        const tail = guessed.length - 1
        if (sequence[tail] === guessed[tail]) {
            if (sequence.length === guessed.length) {
                goNextLevel()
            }
        } else {
                onEndGame()
            }
        },
        [goNextLevel, onEndGame]
    )

    useEffect(() => {
        checkWin(guessed, sequence)
    }, [guessed, sequence, checkWin])

    return (
        <Fragment>
            <FlexContainer>
                {gameOver && started && <Announcement />}
                <AppBar />
                <PadsContainer>
                    <PadBank
                        pads={colors.slice(0, 2)}
                        handleClick={handleClick}
                        className='top'
                    />
                    <Score score={score} />
                    <PadBank
                        pads={colors.slice(2, 4)}
                        handleClick={handleClick}
                        className='bottom'
                    />
                </PadsContainer>
            </FlexContainer>
        </Fragment>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(App)
