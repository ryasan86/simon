import { sample } from 'lodash'
import {
    START_GAME,
    END_GAME,
    RESET_GAME,
    GUESS_COLOR,
    SEQUENCE_ON,
    NEXT_LEVEL
} from './types'
import { colors } from '../constants'
import { Action } from '../interfaces'

const onStartGame = (): Action => ({
    type: START_GAME,
    payload: sample(colors)
})

const onEndGame = (): Action => ({ type: END_GAME })

const onResetGame = (): Action => ({ type: RESET_GAME })

const onSequenceOn = (): Action => ({ type: SEQUENCE_ON })

const onNextLevel = (): Action => ({ type: NEXT_LEVEL })

const onGuessColor = (payload: Record<string, any>): Action => ({
    type: GUESS_COLOR,
    payload
})

const onPlaySequence = () => async (dispatch, getState) => {}

export const gameActions = {
    onPlaySequence,
    onStartGame,
    onEndGame,
    onResetGame,
    onSequenceOn,
    onNextLevel,
    onGuessColor
}
