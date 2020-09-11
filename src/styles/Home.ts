import styled, { css } from 'styled-components'

import GithubIcon from '../components/GithubIcon'
import { Button } from './Button'

const selectedStyles = css`
    opacity: 1;
    transform: translateY(0);
    z-index: 50;
`

const Home = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transform: translateY(-100%);
    transition: opacity 1s, transform 1s;
    width: 100%;
    z-index: -1;

    ${props => props.selected && selectedStyles}
`

Home.Title = styled.h1`
    font-size: 150px;
    margin-top: 0;
    text-align: center;
`

Home.Options = styled.div`
    text-align: center;
`

Home.Icon = styled(GithubIcon)`
    position: absolute;
    right: 10px;
    top: 10px;
`

Home.Button = Button

export { Home }
