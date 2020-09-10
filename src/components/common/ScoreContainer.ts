import styled from 'styled-components';

const ScoreContainer = styled.div`
    align-items: center;
    background: #131313;
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 50px;
    font-weight: bolder;
    height: 100px;
    justify-content: center;
    position: absolute;
    width: 100px;
    z-index: 9997;

    @media (max-width: 720px) {
        font-size: 25px;
        height: 50px;
        width: 50px;
    }
`;

export { ScoreContainer };
