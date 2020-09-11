import styled, { css } from 'styled-components'

const gameOverStyles = css`
    filter: grayscale(1);

    &::before {
        opacity: 1;
        z-index: 1;
    }
`

const selectedStyles = css`
    opacity: 1;
    transform: translateY(0);
    z-index: 50;
`

const Board = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    transition: filter 0.5s, opacity 1s, transform 1s;
    width: 100%;
    z-index: -1;

    ${props => props.selected && selectedStyles}

    &::before {
        background: rgba(0, 0, 0, 0.75);
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: all 0.5s;
        width: 100%;
        z-index: -1;
    }

    ${props => props.gameOver && gameOverStyles}
`

Board.HighScore = styled.div`
    font-size: 30px;
    padding-right: 20px;
    text-align: right;
    width: 100%;
`

export { Board }
