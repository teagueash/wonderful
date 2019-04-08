import React, { useState } from 'react';
import ListItem from './ListItem';

import { ListContainer, ListHeader } from '../styles/ListStyles';

function List({ heading, mockData }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function toggleActive(index) {
        setActiveIndex(index);
    }

    return (
        <ListContainer>
            <ListHeader>{heading}</ListHeader>
            {mockData.map((data, index) => {
                const active = activeIndex === index;
                return (
                    <ListItem
                        key={data.id}
                        index={index}
                        data={data}
                        active={active}
                        toggleActive={toggleActive}
                    />
                );
            })}
        </ListContainer>
    );
}

export default List;
