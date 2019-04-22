import React, { useState } from 'react';
import List from './List';
import ImageLoader from './ImageLoader';
import { CDN_PATH } from '../constants/paths';
import backgroundDarkLQIP from '../media/backgroundDarkLQIP.png';

import {
    LandingContainer,
    LandingHeader,
    LandingAnchor,
    LandingLogo,
    LandingRow,
    LandingColumn,
    LandingImageDark,
    LandingBlockDark,
} from '../styles/LandingStyles';

function LandingDark() {
    const [loaded, setLoaded] = useState(false);

    function onLoad() {
        setLoaded(true);
    }
    const style = loaded ? { opacity: 1 } : {};

    const heading = 'Lorem Ipsum';
    const mockData = [
        {
            id: 'trainstop',
            image: `${CDN_PATH}trainstop.png`,
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam',
        },
        {
            id: 'coffeeshop',
            image: `${CDN_PATH}coffeeshop.png`,
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam efficitur lectus eros',
        },
        {
            id: 'jungle',
            image: `${CDN_PATH}jungle.png`,
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam',
        },
    ];

    return (
        <>
            <ImageLoader
                srcPreload={backgroundDarkLQIP}
                srcLoaded={`${CDN_PATH}backgroundAlt.svg`}
            />
            <LandingContainer>
                <LandingHeader>
                    <LandingAnchor href="https://google.com">
                        <LandingLogo src={`${CDN_PATH}logowhite.png`} />
                    </LandingAnchor>
                </LandingHeader>
                <LandingRow marginTop={0}>
                    <LandingColumn>
                        <LandingBlockDark marginLeft={'22%'}>
                            <List heading={heading} mockData={mockData} />
                        </LandingBlockDark>
                    </LandingColumn>
                    <LandingColumn backgroundColor={'#07435e'} flexEnd={true}>
                        <LandingImageDark
                            style={style}
                            src={`${CDN_PATH}iPhone.png`}
                            onLoad={onLoad}
                        />
                    </LandingColumn>
                </LandingRow>
            </LandingContainer>
        </>
    );
}

export default LandingDark;
