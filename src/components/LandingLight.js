import React from 'react';
import ImageLoader from './ImageLoader';
import Card from './Card';
import { CDN_PATH } from '../constants/paths';
import backgroundLightLQIP from '../media/backgroundLightLQIP.png';

import {
    LandingContainer,
    LandingHeader,
    LandingAnchor,
    LandingLogo,
    LandingRow,
    LandingColumn,
    LandingBlockLight,
    LandingLandingHeader,
    LandingLandingParagraph,
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
            <LandingContainer>
                <LandingHeader>
                    <LandingAnchor href="https://google.com">
                        <LandingLogo src={`${CDN_PATH}logodark.png`} />
                    </LandingAnchor>
                </LandingHeader>
                <LandingRow marginTop={'3em'}>
                    <LandingColumn>
                        <LandingBlockLight marginLeft={'22%'}>
                            <LandingLandingHeader>
                                Lorem ipsum dolor sit amet, consec tetur adip
                                iscing
                            </LandingLandingHeader>
                            <LandingLandingParagraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, nuliam efficitur lectus eros
                            </LandingLandingParagraph>
                        </LandingBlockLight>
                    </LandingColumn>
                    <LandingColumn backgroundColor={'#F6FCFF'}>
                        <LandingBlockLight>
                            <Card
                                image={`${CDN_PATH}shareCard.png`}
                                data={mockData}
                            />
                        </LandingBlockLight>
                    </LandingColumn>
                </LandingRow>
            </LandingContainer>
        </>
    );
}

export default LandingLight;
