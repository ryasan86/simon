import styled, { css } from 'styled-components'

const App = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`

const gameOverStyles = css`
    filter: grayscale(1);

    &::before {
        opacity: 1;
        z-index: 1;
    }
`

App.Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    transition: filter 0.5s;
    width: 100%;

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

App.HighScore = styled.div`
    font-size: 30px;
    padding-right: 20px;
    text-align: right;
    width: 100%;
`

export { App }
