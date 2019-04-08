import React, { useState } from 'react';
import List from './List';
import ImageLoader from './ImageLoader';
import { CDN_PATH } from '../constants/paths';
import backgroundDarkLQIP from '../media/backgroundDarkLQIP.png';

import {
    StyledContainer,
    StyledHeader,
    StyledAnchor,
    StyledLogo,
    StyledRow,
    StyledColumn,
    StyledImageDark,
    StyledBlockDark,
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
            image: `${CDN_PATH}trainstop.svg`,
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam',
        },
        {
            id: 'coffeeshop',
            image: `${CDN_PATH}coffeeshop.svg`,
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam efficitur lectus eros',
        },
        {
            id: 'jungle',
            image: `${CDN_PATH}jungle.svg`,
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
            <StyledContainer>
                <StyledHeader>
                    <StyledAnchor href="https://google.com">
                        <StyledLogo src={`${CDN_PATH}logowhite.png`} />
                    </StyledAnchor>
                </StyledHeader>
                <StyledRow marginTop={0}>
                    <StyledColumn>
                        <StyledBlockDark marginLeft={'22%'}>
                            <List heading={heading} mockData={mockData} />
                        </StyledBlockDark>
                    </StyledColumn>
                    <StyledColumn backgroundColor={'#07435e'} flexEnd={true}>
                        <StyledImageDark
                            style={style}
                            src={`${CDN_PATH}iPhone.png`}
                            onLoad={onLoad}
                        />
                    </StyledColumn>
                </StyledRow>
            </StyledContainer>
        </>
    );
}

export default LandingDark;
