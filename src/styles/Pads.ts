import styled, { css } from 'styled-components'
import { createNeonAnimation } from '../utils'

const Pads = styled.div`
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
`

Pads.Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    margin-top: 100px;
`

const activeCSS = color => css`
    animation: ${createNeonAnimation(color)} 0.2s linear;
    border-radius: 20px;
`

// prettier-ignore
Pads.Item = styled.div`
    background: ${props => props.color};
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
    height: 200px;
    margin: 5px;
    width: 200px;
    transition: all 0.2s linear;
    pointer-events: ${props => props.playingSequence || props.active ? 'none' : 'initial'};

    ${props => (props.active ? activeCSS(props.color) : '')}

    &:hover {
        transform: ${props => !props.active ? 'scale(1.03)' : ''};
    }

    &:first-child {
        border-top-left-radius: 100%;
    }

    &:nth-child(2) {
        border-top-right-radius: 100%;
    }

    &:nth-child(3) {
        border-bottom-left-radius: 100%;
    }

    &:nth-child(4) {
        border-bottom-right-radius: 100%;
    }
`

Pads.Score = styled.div`
    background: #131313;
    border-radius: 50%;
    color: white;
    font-size: 75px;
    font-weight: bolder;
    height: 100px;
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    line-height: 100px;
    text-align: center;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat';
    margin-right: 20px;
`

export { Pads }
