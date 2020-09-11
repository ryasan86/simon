export interface StateProps {
    playingSequence?: boolean
    gameOver?: boolean
    started?: boolean
    score?: number
    sequence?: string[]
    guessed?: string[]
    highScore?: number
}

export interface ActionProps {
    type: string
    payload?: any
}

export interface DispatchProps {
    dispatch: (args: ActionProps) => void
}
