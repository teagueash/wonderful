import React, { useState, useEffect, useRef } from 'react';
import {
    ImageLoaderContainer,
    ImageLoaderPreload,
    ImageLoaderLoaded,
} from '../styles/ImageLoaderStyles';

function ImageLoader({ srcPreload, srcLoaded }) {
    const [fadein, setFadein] = useState(false);
    const imageLoaderRef = useRef(null);

    const image = new Image();
    useEffect(() => {
        image.src = srcLoaded;
        image.addEventListener('load', function() {
            imageLoaderRef.current.setAttribute(
                'style',
                `background-image: url('${srcLoaded}')`
            );
            setFadein(true);
        });
    }, []);

    return (
        <ImageLoaderContainer>
            <ImageLoaderLoaded fadein={fadein} ref={imageLoaderRef} />
            <ImageLoaderPreload background={srcPreload} />
        </ImageLoaderContainer>
    );
}

export default ImageLoader;
