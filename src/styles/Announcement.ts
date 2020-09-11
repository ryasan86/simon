import styled, { keyframes, css } from 'styled-components'

export const Announcement = styled.div`
    flex-grow: 2;
    overflow: hidden;
    text-align: center;
`

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    50% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const fadeUpStyles = css`
    animation: ${fadeUp} 1.5s;
`

Announcement.Text = styled.span`
    align-items: center;
    display: flex;
    font-size: 40px;
    height: 100%;
    justify-content: center;
    transform: translateY(100%);

    ${props => props.isAnimating && fadeUpStyles}
`
