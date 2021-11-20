import React, {useRef, useEffect, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export const Rating = () => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const starsEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('star', starsEl.current);

    }, []);
    
    const onHover = (event, index) => {
        setCurrentRating(index);
    };

    const stars = [];

    for (let index = 0; index < 5; index += 1)
        stars.push(<Star key={ index } index={ index + 1 } onHover={ onHover } />);
    
    

    return (
        <RatingWrapper
            ref={ starsEl }
        >
            {stars}
            {currentRating}
        </RatingWrapper>
    );
};
