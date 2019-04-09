import styled from 'styled-components';

/********************************************
 *
 *                APP STYLES
 *
 ********************************************/
export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`;
export const SwitchContainer = styled.div`
    position: absolute;
    z-index: 1;
    padding-top: 0.5em;
    transition: all 0.5s ease;
    opacity: ${props => (props.visible ? 1 : 0)};

    @media (min-width: 768px) {
        padding: 1.5em 0 0 1em;
    }
`;
