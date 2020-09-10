export interface GameProps {
    game: {
        playingSequence: boolean
        gameOver: boolean
        started: boolean
        score: number
        activePad: string
        sequence: string[]
        guessed: string[]
        highScore: 0
    }
}

export interface Action {
    type: string
    payload?: any
}

export interface ActionProps {
    actions: {
        onStartGame: () => Action
        onEndGame: () => Action
        onResetGame: () => Action
        onSequenceOn: () => Action
        onSequenceOff: () => Action
        onNextLevel: () => Action
        onGuessColor: (payload: { guess: string }) => Action
        onActivePad: (payload: { color: string }) => Action
        onPlaySequence: () => (dispatch: any, getState: any) => void
    }
}
