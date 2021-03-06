import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    height: 50px;
    min-width: 100px;
    outline: none;
    padding: 0 20px;
    transition: background 0.2s, color 0.2s;

    &:hover {
        background: white;
        color: black;
    }

    &:disabled {
        background: transparent;
        color: white;
        cursor: not-allowed;
    }
`

export { Button }
