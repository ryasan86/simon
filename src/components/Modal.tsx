import React from 'react'

import { Modal, Button } from '../styles'
import { StateProps, DispatchProps } from '../interfaces'
import { RESET_GAME } from '../action-types'

type Props = { state: StateProps } & DispatchProps

const ModalComponent: React.FC<Props> = ({ state, dispatch }) => (
    <Modal isActive={state.started && state.gameOver}>
        <Modal.Container>
            <Modal.Message>
                Final Score: {state.score}
                <Button onClick={() => dispatch({ type: RESET_GAME })}>
                    Close
                </Button>
            </Modal.Message>
        </Modal.Container>
    </Modal>
)

export default ModalComponent
