import React, { useState } from 'react'

import { GH_ICON } from '../images'
import { githubRepoUrl } from '../constants'
import { Button, Logo, Navbar } from '../styles'
import { StateProps, DispatchProps } from '../interfaces'
import { START_GAME, RESET_GAME } from '../action-types'
import { idle } from '../utils'

type Props = { state: StateProps } & DispatchProps

const NavbarComponent: React.FC<Props> = props => {
    const { state: { gameOver, started, playingSequence }, dispatch } = props // prettier-ignore
    const [isAnimating, setIsAnimating] = useState(false)

    const handleMouseEnter = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            idle(1000).then(() => setIsAnimating(false))
        }
    }

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
            <a href={githubRepoUrl} onMouseEnter={handleMouseEnter}>
                <Logo src={GH_ICON} alt='github' isAnimating={isAnimating} />
            </a>
        </Navbar>
    )
}

export default NavbarComponent
