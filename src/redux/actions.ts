import { sample } from 'lodash'
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
import { colors } from '../globals'
import { sleep, playSound } from '../utils'
import { SEQUENCE_DELAY, colorObj } from '../globals'
import { Action } from '../interfaces'

const onStartGame = (): Action => ({
    type: START_GAME,
    payload: sample(colors)
})

const onEndGame = (): Action => ({ type: END_GAME })

const onResetGame = (): Action => ({ type: RESET_GAME })

const onSequenceOn = (): Action => ({ type: SEQUENCE_ON })

const onSequenceOff = (): Action => ({ type: SEQUENCE_OFF })

const onNextLevel = (): Action => ({ type: NEXT_LEVEL })

const onGuessColor = (payload: Record<string, any>): Action => ({
    type: GUESS_COLOR,
    payload
})

const onActivePad = (payload: Record<string, any>): Action => ({
    type: ACTIVE_PAD,
    payload
})

const onPlaySequence = () => async (dispatch, getState) => {
    dispatch(onSequenceOn())
    const { sequence } = getState().game
    for (let i = 0; i < sequence.length; i++) {
        const { color, audioUrl } = colorObj[sequence[i]]
        playSound(audioUrl)
        dispatch(onActivePad({ color }))
        await sleep(SEQUENCE_DELAY)
        dispatch(onActivePad({ color: '' }))
        await sleep(SEQUENCE_DELAY)
    }
    dispatch(onSequenceOff())
}

export const gameActions = {
    onPlaySequence,
    onStartGame,
    onEndGame,
    onResetGame,
    onSequenceOn,
    onSequenceOff,
    onNextLevel,
    onGuessColor,
    onActivePad
}
