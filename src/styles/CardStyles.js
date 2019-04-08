import styled from 'styled-components';

/********************************************
 *
 *                CARD STYLES
 *
 ********************************************/
export const CardContainer = styled.div`
    height: auto;
    width: auto;
    margin: 0 auto;
    border-radius: 12px;
    z-index: 2;
    text-align: left;
    box-shadow: 0 24px 38px rgba(0, 0, 0, 0.3), 0 22px 12px rgba(0, 0, 0, 0.22);
    opacity: 0;
    transition: opacity 1s ease;

    @media (min-width: 1024px) {
        width: 25vw;
        margin: auto;
    }
`;
export const CardMedia = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`;
export const CardContent = styled.div`
    height: 50%;
    width: auto;
    background-color: #eb2e65;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    &:last-child {
        padding-bottom: 4em;
    }
`;
export const CardName = styled.h1`
    color: #fff;
    padding-top: 1em;
    margin-top: 0;
    font-weight: 400;
    font-size: 1.5em;
    margin-left: 27px;
`;
export const CardText = styled.p`
    color: #fff;
    font-size: 0.8em;
    margin-left: 27px;
    opacity: 0.7;

    @media (max-width: 700px) {
        font-size: 1em;
    }
`;
