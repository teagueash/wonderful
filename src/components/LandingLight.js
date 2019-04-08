import React from 'react';
import ImageLoader from './ImageLoader';
import Card from './Card';
import { CDN_PATH } from '../constants/paths';
import backgroundLightLQIP from '../media/backgroundLightLQIP.png';

import {
    StyledContainer,
    StyledHeader,
    StyledAnchor,
    StyledLogo,
    StyledRow,
    StyledColumn,
    StyledBlockLight,
    StyledLandingHeader,
    StyledLandingParagraph,
} from '../styles/LandingStyles';

function LandingLight() {
    const mockData = {
        name: 'Johanna Greene',
        role: 'Product Designer',
        company: 'Wonderful',
        phone: '(808) 909-0011',
        email: 'JGreene@gmail.com',
        url: 'http://www.Greenlikethecolor.com',
    };
    return (
        <>
            <ImageLoader
                srcPreload={backgroundLightLQIP}
                srcLoaded={`${CDN_PATH}background.svg`}
            />
            <StyledContainer>
                <StyledHeader>
                    <StyledAnchor href="https://google.com">
                        <StyledLogo src={`${CDN_PATH}logodark.png`} />
                    </StyledAnchor>
                </StyledHeader>
                <StyledRow marginTop={'3em'}>
                    <StyledColumn>
                        <StyledBlockLight marginLeft={'22%'}>
                            <StyledLandingHeader>
                                Lorem ipsum dolor sit amet, consec tetur adip
                                iscing
                            </StyledLandingHeader>
                            <StyledLandingParagraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, nuliam efficitur lectus eros
                            </StyledLandingParagraph>
                        </StyledBlockLight>
                    </StyledColumn>
                    <StyledColumn backgroundColor={'#F6FCFF'}>
                        <StyledBlockLight>
                            <Card
                                image={`${CDN_PATH}shareCard.png`}
                                data={mockData}
                            />
                        </StyledBlockLight>
                    </StyledColumn>
                </StyledRow>
            </StyledContainer>
        </>
    );
}

export default LandingLight;
