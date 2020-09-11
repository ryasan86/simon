import React from 'react'

import { Home } from '../styles'
import { colorMap } from '../constants'

interface Props {
    selected: boolean
    onNavigate?: (path: string) => () => void
}

const textColors = [
    'red',
    'blue',
    'yellow',
    'green',
    'red',
    'initial',
    'blue',
    'yellow',
    'green',
    'red'
]

const HomePage: React.FC<Props> = ({ selected, onNavigate }) => (
    <Home selected={selected}>
        <Home.Title>
            {[...'Simon Says'].map((c, i) => (
                <span key={i} style={{ color: colorMap[textColors[i]] }}>
                    {c}
                </span>
            ))}
        </Home.Title>
        <Home.Options>
            <Home.Button onClick={onNavigate('board')}>Play</Home.Button>
        </Home.Options>
        <Home.Icon />
    </Home>
)

export default HomePage
