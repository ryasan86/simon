import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { gameActions } from '../redux/actions'
import { GH_ICON } from '../images'
import { GITHUB_REPO_URL, NEXT_LEVEL_DELAY } from '../globals'
import { sleep } from '../utils'
import { Button, Logo, AppBarWrapper } from './common'
import { ActionProps, GameProps } from '../interfaces'

const AppBar: React.FC<GameProps & ActionProps> = props => {
    const { gameOver, started, playingSequence } = props.game
    const { onStartGame, onPlaySequence, onResetGame } = props.actions

    const startGame = async () => {
        await sleep(NEXT_LEVEL_DELAY)
        onStartGame()
        onPlaySequence()
    }

    const renderButton = () => {
        if (gameOver && !started) {
            return <Button onClick={startGame}>Start</Button>
        } else {
            return (
                <Button onClick={onResetGame} disabled={playingSequence}>
                    Reset
                </Button>
            )
        }
    }

    return (
        <AppBarWrapper>
            {renderButton()}
            <a href={GITHUB_REPO_URL}>
                <Logo src={GH_ICON} alt='github' />
            </a>
        </AppBarWrapper>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(gameActions, dispatch) })
)(AppBar)
