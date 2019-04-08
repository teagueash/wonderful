import styled from 'styled-components';

/********************************************
 *
 *          SHARED LANDING STYLES
 *
 ********************************************/
export const StyledContainer = styled.div`
    position: relative;
`;
export const StyledHeader = styled.div`
    text-align: center;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #9999a1;

    @media (min-width: 768px) {
        width: 100%;
        padding-top: 0;
        text-align: left;
        border-bottom: none;
    }
`;
export const StyledAnchor = styled.a``;
export const StyledLogo = styled.img`
    height: 25px;
    width: 110px;

    @media (min-width: 768px) {
        margin-top: 1.6em;
        margin-left: 11%;
    }
`;
export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: ${props => props.marginTop};
`;
export const StyledColumn = styled.div`
    flex-basis: 100%;
    margin: 0em 2em 0em 2em;

    ${({ flexEnd }) =>
        flexEnd &&
        `
        display: flex;
        align-items: center;

    `}
    @media (max-width: 768px) {
        &:last-child {
            ${({ backgroundColor }) =>
                backgroundColor &&
                `
              background-color: ${backgroundColor};

          `}
            z-index: 1;
            margin: 2em 0 0 0;
        }
    }

    @media (min-width: 768px) {
        flex-basis: 50%;
        margin: 0 auto;
    }
`;

/********************************************
 *
 *          DARK LANDING STYLES
 *
 ********************************************/
export const StyledImageDark = styled.img`
    z-index: 1;
    width: 80%;
    max-width: 350px;
    height: auto;
    display: block;
    margin: 0 auto;
    opacity: 0;
    transition: opacity 1s ease;

    @media (min-width: 768px) {
        max-width: 350px;
        width: 100%;
        height: auto;
    }
`;
export const StyledBlockDark = styled.div`
    margin: 0 auto;
    text-align: center;
    width: auto;

    @media (min-width: 768px) {
        margin-left: ${props => props.marginLeft};
        padding: 0;
        text-align: left;
        width: auto;
    }

    @media (min-width: 1024px) {
        margin-left: ${props => props.marginLeft};
        padding: 0;
        text-align: left;
        width: auto;
    }
`;
/********************************************
 *
 *          LIGHT LANDING STYLES
 *
 ********************************************/
export const StyledBlockLight = styled.div`
    margin: 0 auto;
    padding-bottom: 2em;
    text-align: center;
    width: 300px;

    @media (min-width: 768) {
        margin-left: ${props => props.marginLeft};
        padding: 0;
        text-align: left;
        width: auto;
    }
`;
export const StyledLandingHeader = styled.h1`
    color: #183a4f;
    padding-top: 1em;
    margin: 0 auto;
    text-align: center;
    font-weight: 400;
    font-size: 3em;

    @media (min-width: 768px) {
        margin: 1.5em 0 0 0;
        text-align: left;
    }
`;
export const StyledLandingParagraph = styled.p`
    color: #183a4f;
    margin: 0 auto;
    padding: 2em 0 2em 0;
    text-align: center;
    line-height: 1.5;
    opacity: 0.8;
    font-size: 0.9em;

    @media (min-width: 768px) {
        color: #909293;
        margin: auto;
        padding: auto;
        text-align: left;
    }
`;
