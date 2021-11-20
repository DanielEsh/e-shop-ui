import React, {useRef, useEffect, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export const Rating = () => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [currentHoverRating, setCurrentHoverRating] = useState<number>(0);
    const [hoverMode, setHoverMode] = useState<boolean>(false);
    const starsEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('star', starsEl.current);
        setCurrentRating(4);
    }, []);
    
    const onHover = (event, index) => {
        setCurrentHoverRating(index);
    };

    const onRatingMouseEnter = () => {
        setHoverMode(true);
    };

    const onRatingMouseLeave = () => {
        setCurrentHoverRating(0);
        setHoverMode(false);
    };

    const stars = [];

    for (let index = 0; index < 5; index += 1)
        stars.push(<Star
            key={ index } currentHoverRating={ currentHoverRating } currentRating={ currentRating }
            hoverMode={ hoverMode }
            index={ index + 1 }
            onHover={ onHover }
        />);
    
    

    return (
        <RatingWrapper
            ref={ starsEl }
            onMouseEnter={ onRatingMouseEnter }
            onMouseLeave={ onRatingMouseLeave }
        >
            {stars}
            {hoverMode ? currentHoverRating : currentRating }
        </RatingWrapper>
    );
};
