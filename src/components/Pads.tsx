import React, { useEffect, useState, useCallback } from 'react'

import { Pads } from '../styles'
import { idle, playSound, curry } from '../utils'
import { StateProps, DispatchProps } from '../interfaces'
import { sequenceDelay, soundMap, colors, colorMap } from '../constants'
import { GUESS, TOGGLE_PLAYING_SEQUENCE } from '../action-types'

const activate = curry(async (setter, duration, a) => {
    setter(a)
    await idle(duration)
    setter(null)
})

type PadsProps = { state: StateProps } & DispatchProps

const PadsComponent: React.FC<PadsProps> = ({ state, dispatch }) => {
    const { playingSequence, guessed, sequence, started, score } = state
    const [selected, selectColor] = useState<string>(null)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    const activateColor = useCallback(activate(selectColor, sequenceDelay), [])

    const handleClick = (e: MouseEvent) => {
        const { color } = (e.target as HTMLElement).dataset

        if (!playingSequence && started && guessed.length < sequence.length) {
            dispatch({ type: GUESS, payload: color })
        } else if (!started) {
            activateColor(color)
        }
    }

    useEffect(() => {
        if (selected) playSound(soundMap[selected])
    }, [selected])

    useEffect(() => {
        if (guessed.length) {
            const color = guessed[guessed.length - 1]
            activateColor(color)
        }
    }, [guessed, activateColor])

    useEffect(() => {
        if (score) activate(setIsAnimating, 1000, true)
    }, [score])

    useEffect(() => {
        const playSequence = async () => {
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
            for (const c of sequence) {
                await activateColor(c)
                await idle(sequenceDelay)
            }
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
        }

        if (started) playSequence()
    }, [started, sequence, dispatch, activateColor])

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
