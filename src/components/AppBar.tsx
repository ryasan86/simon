import React from 'react'

import { GH_ICON } from '../images'
import { githubRepoUrl } from '../constants'
import { Button, Logo, AppBar } from '../styles'

type Props = {
    startGame: () => void
    resetGame: () => void
    gameOver: boolean
    started: boolean
}

const AppBarComponent: React.FC<Props> = props => {
    const { gameOver, started, startGame, resetGame } = props

    return (
        <AppBar>
            {gameOver && !started ? (
                <Button onClick={startGame}>Start</Button>
            ) : (
                <Button onClick={resetGame} disabled={false}>
                    Reset
                </Button>
            )}
            <a href={githubRepoUrl}>
                <Logo src={GH_ICON} alt='github' />
            </a>
        </AppBar>
    )
}

export default AppBarComponent
