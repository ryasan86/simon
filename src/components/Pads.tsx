import React, { useEffect, useState } from 'react'

import { Pads } from '../styles'
import { idle, playSound } from '../utils'
import { StateProps, DispatchProps } from '../interfaces'
import { sequenceDelay, soundMap, colors, colorMap } from '../constants'
import { GUESS, TOGGLE_PLAYING_SEQUENCE } from '../action-types'

type PadsProps = { state: StateProps } & DispatchProps

const PadsComponent: React.FC<PadsProps> = ({ state, dispatch }) => {
    const { playingSequence, guessed, sequence, started, score } = state
    const [selected, selectColor] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleClick = (e: MouseEvent) => {
        if (!playingSequence) {
            const { color } = (e.target as HTMLElement).dataset
            dispatch({ type: GUESS, payload: color })
        }
    }

    useEffect(() => {
        if (selected) playSound(soundMap[selected])
    }, [selected])

    useEffect(() => {
        if (guessed.length) {
            selectColor(guessed[guessed.length - 1])
            idle(sequenceDelay).then(() => selectColor(null))
        }
    }, [guessed])

    useEffect(() => {
        if (score) {
            setIsAnimating(true)
            idle(1000).then(() => setIsAnimating(false))
        }
    }, [score])

    useEffect(() => {
        const toggleIsPlaying = () => {
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
        }
        const playSequence = async () => {
            toggleIsPlaying()
            for (const c of sequence) {
                selectColor(c)
                await idle(sequenceDelay).then(() => selectColor(null))
                await idle(sequenceDelay)
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
                        color={colorMap[color]}
                        data-color={color}
                        playingSequence={playingSequence}
                        onClick={handleClick}
                    />
                ))}
                <Pads.ScoreContainer>
                    <Pads.ScoreText isAnimating={isAnimating}>
                        {score}
                    </Pads.ScoreText>
                </Pads.ScoreContainer>
            </Pads.Inner>
        </Pads>
    )
}

export default PadsComponent
