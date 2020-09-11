import styled, { css } from 'styled-components'

const activeStyles = css`
    height: 100vh;
    left: 0;
    opacity: 1;
    top: 0;
    transform: scale(1);
    width: 100vw;
    z-index: 2;
`

export const Modal = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale(0);
    transition: all 0.5s;
    width: 100%;
    z-index: -1;

    ${props => props.isActive && activeStyles}
`

Modal.Container = styled.div`
    background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    display: flex;
    height: 150px;
    justify-content: center;
    position: absolute;
    width: 300px;
    z-index: 9999;
`

Modal.Message = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: space-around;
    text-align: center;
`
