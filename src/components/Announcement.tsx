import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { gameActions } from '../redux/actions'

import { ModalBackdrop, ModalContainer, ModalMessage, Button } from '../styles'
import { ActionProps, GameProps } from '../interfaces'

const Announcement: React.FC<ActionProps & GameProps> = props => {
    const startGame = () => {}

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
