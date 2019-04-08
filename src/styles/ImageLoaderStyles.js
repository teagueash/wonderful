import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    & div {
        width: inherit;
        height: inherit;
    }
    * {
        position: absolute;
    }
`;

export const StyledPreload = styled.div`
    z-index: 1;
    filter: blur(50px);
    position: absolute;
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StyledLoaded = styled.div`
    z-index: 2;
    opacity: ${props => (props.fadein ? 1 : 0)}
    position: absolute;
    background-size: cover;
    background-position: 80%;
    transition: opacity 1s ease;

    @media (min-width: 768px) {
        background-position: center;
    }

`;
