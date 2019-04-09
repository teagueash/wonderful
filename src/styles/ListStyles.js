import styled from 'styled-components';
import { fadein } from './fadein';

/********************************************
 *
 *                LIST STYLES
 *
 ********************************************/
export const ListContainer = styled.div``;
export const ListHeader = styled.h1`
    z-index: 4;
    font-size: 3em;
    margin-bottom: 1em;
    font-weight: 400;
    color: #fff;
    animation: ${fadein} 1s ease;
`;
export const ListItemPlaceholder = styled.div`
    height: 100%;
    background-color: #fff;
    animation: ${fadein} 1.5s ease;
`;
export const ListItemContainer = styled.div`
    margin: 1em 0 1em 0;
    height: 21vh;
    min-height: 150px;
    width: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 4px;
    opacity: 0;
    transition: color 0.25s ease-in-out, opacity 1s ease;

    ${({ active }) =>
        active &&
        `
        background: #fff;
        & ${ListItemText} {
          color: #183a4f;
        }
        & ${ListItemIndex} {
          color: #EA3367;
        }
    `}
    @media (min-width: 768px) {
        width: 40vw;
    }
`;
export const ListItemMediaContainer = styled.div`
    height: 100%;
    position: relative;
`;
export const ListItemMedia = styled.img`
    height: 100%;
    display: block;
`;
export const ListItemText = styled.p`
    color: #fff;
    margin-left: 1em;
    margin-right: 1em;
    font-size: 0.9em;
    line-height: 2;
    transition: color 0.25s ease-in-out;

    @media (min-width: 768px) {
        margin-left: 2em;
        margin-right: 3em;
    }
`;
export const ListItemIndexContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const ListItemIndex = styled.p`
    font-size: 2em;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 3em;
        margin: 0;
    }
`;
