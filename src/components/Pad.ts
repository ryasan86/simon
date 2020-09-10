import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { createNeonAnimation } from '../utils'

/* stylelint-disable */
const activeCSS = color => css`
    animation: ${createNeonAnimation(color)} 0.5s linear;
    background: ${lighten(0.3, color)};
    border: 3px solid white;
    border-radius: 30px;
    transform: scale(1.1);
`
/* stylelint-enable */

// pad component
const Pad = styled.div`
    background: ${props => props.color};
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
    height: 200px;
    margin: 5px;
    transition: 0.2s;
    width: 200px;

    @media (max-width: 720px) {
        border-radius: 7px;
        height: 100px;
        margin: 2px;
        width: 100px;
    }

    ${({ active, color }) => (active ? activeCSS(color) : '')}

    &:hover {
        transform: ${({ active, playingSequence }) =>
            !active && !playingSequence ? 'scale(1.03)' : ''};
    }

    &.top-left {
        border-top-left-radius: 100%;
    }

    &.top-right {
        border-top-right-radius: 100%;
    }

    &.bottom-left {
        border-bottom-left-radius: 100%;
    }

    &.bottom-right {
        border-bottom-right-radius: 100%;
    }
`

export default Pad
