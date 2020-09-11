import React, { useEffect, useState } from 'react'

import { Pads } from '../styles'
import { idle, playSound } from '../utils'
import { StateProps, DispatchProps } from '../interfaces'
import { sequenceDelay, soundMap, colors, colorMap } from '../constants'
import { GUESS, TOGGLE_PLAYING_SEQUENCE } from '../action-types'

type PadsProps = { state: StateProps } & DispatchProps

const PadsComponent: React.FC<PadsProps> = ({ state, dispatch }) => {
    const { playingSequence, guessed, sequence, started, score } = state
    const [selected, selectColor] = useState<string>(null)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    const briefly = async (briefEffect, arg, duration) => {
        briefEffect(arg)
        await idle(duration)
        briefEffect(null)
    }

    const handleClick = (e: MouseEvent) => {
        const { color } = (e.target as HTMLElement).dataset

        if (!playingSequence && started && guessed.length < sequence.length) {
            dispatch({ type: GUESS, payload: color })
        } else if (!started) {
            briefly(selectColor, color, sequenceDelay)
        }
    }

    useEffect(() => {
        if (selected) playSound(soundMap[selected])
    }, [selected])

    useEffect(() => {
        if (guessed.length) {
            const color = guessed[guessed.length - 1]
            briefly(selectColor, color, sequenceDelay)
        }
    }, [guessed])

    useEffect(() => {
        if (score) briefly(setIsAnimating, true, 1000)
    }, [score])

    useEffect(() => {
        const playSequence = async () => {
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
            for (const c of sequence) {
                await briefly(selectColor, c, sequenceDelay)
                await idle(sequenceDelay)
            }
            dispatch({ type: TOGGLE_PLAYING_SEQUENCE })
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
