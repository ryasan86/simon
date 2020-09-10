import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { gameActions } from '../redux/actions'
import { NEXT_LEVEL_DELAY } from '../globals'
import { sleep } from '../utils'

import { ModalBackdrop, ModalContainer, ModalMessage, Button } from './common'
import { ActionProps, GameProps } from '../interfaces'

const Announcement: React.FC<ActionProps & GameProps> = props => {
    const { onStartGame, onPlaySequence } = props.actions

    const startGame = async () => {
        await sleep(NEXT_LEVEL_DELAY)
        onStartGame()
        onPlaySequence()
    }

    return (
        <ModalBackdrop>
            <ModalContainer>
                <ModalMessage>
                    Final Score: {props.game.score}
                    <Button onClick={startGame}>Play Again!</Button>
                </ModalMessage>
            </ModalContainer>
        </ModalBackdrop>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(Announcement)
