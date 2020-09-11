import styled, { css, keyframes } from 'styled-components'
import { createNeonAnimation } from '../utils'

const Pads = styled.div`
    position: relative;
    flex-grow: 1;
    display: flex;
    position: relative;
    justify-content: center;
`

Pads.Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    justify-content: center;
    justify-items: center;
    height: 500px;
    margin-top: 50px;
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
    height: 250px;
    margin: 7.5px;
    width: 250px;
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

Pads.ScoreContainer = styled.div`
    background: #131313;
    border-radius: 50%;
    height: 100px;
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const jellyBounce = keyframes`
  0% { transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.4% { transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.7% { transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.81% { transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.41% { transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10.21% { transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.61% { transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.11% { transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.52% { transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  21.32% { transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  24.32% { transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  25.23% { transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.03% { transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.93% { transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  35.54% { transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.74% { transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  44.44% { transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.15% { transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  59.86% { transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  75.28% { transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90.69% { transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
`

const bounceStyles = () => css`
    animation: ${jellyBounce} 1s linear forwards;
`

Pads.ScoreText = styled.div`
    font-size: 70px;
    text-align: center;
    font-weight: bolder;
    color: white;
    display: block;
    position: absolute;
    line-height: 100px;
    width: 100%;
    top: 7px;
    ${props => props.isAnimating && bounceStyles()};
`

export { Pads }
