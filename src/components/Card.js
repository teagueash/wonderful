import React, { useState } from 'react';

import {
    CardContainer,
    CardMedia,
    CardContent,
    CardName,
    CardText,
} from '../styles/CardStyles';

function Card({ image, data }) {
    const [loaded, setLoaded] = useState(false);

    function onLoad() {
        setLoaded(true);
    }
    const style = loaded ? { opacity: 1 } : {};

    return (
        <CardContainer style={style}>
            <CardMedia src={image} onLoad={onLoad} />
            <CardContent>
                <CardName>{data.name}</CardName>
                <CardText>{data.role}</CardText>
                <CardText>{data.company}</CardText>
                <CardText>{data.phone}</CardText>
                <CardText>{data.email}</CardText>
                <CardText>{data.url}</CardText>
            </CardContent>
        </CardContainer>
    );
}

export default Card;
