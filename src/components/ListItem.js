import React, { useState, useEffect } from 'react';

import {
    ListItemContainer,
    ListItemMediaContainer,
    ListItemMedia,
    ListItemText,
    ListItemIndexContainer,
    ListItemIndex,
} from '../styles/ListStyles';

function ListItem({ index, data, active, toggleActive }) {
    const [loaded, setLoaded] = useState(false);

    function onLoad() {
        setLoaded(true);
    }
    const style = loaded ? { opacity: 1 } : {};

    return (
        <ListItemContainer
            style={style}
            onLoad={onLoad}
            onClick={() => toggleActive(index)}
            active={active}
        >
            <ListItemMediaContainer>
                <ListItemMedia src={data.image} />
                <ListItemIndexContainer>
                    <ListItemIndex>{index + 1}</ListItemIndex>
                </ListItemIndexContainer>
            </ListItemMediaContainer>
            <ListItemText>{data.text}</ListItemText>
        </ListItemContainer>
    );
}

export default ListItem;
