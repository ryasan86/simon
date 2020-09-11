import React from 'react'

import { Button, Navbar } from '../styles'
import { StateProps, DispatchProps } from '../interfaces'
import { START_GAME, RESET_GAME } from '../action-types'
import GithubIcon from './GithubIcon'

type Props = { state: StateProps } & DispatchProps

const NavbarComponent: React.FC<Props> = props => {
    const { state: { gameOver, started, playingSequence }, dispatch } = props // prettier-ignore

    return (
        <Navbar>
            {gameOver && !started ? (
                <Button onClick={() => dispatch({ type: START_GAME })}>
                    Start
                </Button>
            ) : (
                <Button
                    onClick={() => dispatch({ type: RESET_GAME })}
                    disabled={playingSequence}>
                    Reset
                </Button>
            )}
            <GithubIcon />
        </Navbar>
    )
}

export default NavbarComponent
