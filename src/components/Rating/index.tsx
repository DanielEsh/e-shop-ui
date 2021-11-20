import React, {FC, useRef, useEffect, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export type RatingProps = {
    half: boolean,
};

export const Rating: FC<RatingProps> = ({
    half = false
}) => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [currentHoverRating, setCurrentHoverRating] = useState<number>(0);
    const [hoverMode, setHoverMode] = useState<boolean>(false);
    const starsEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setCurrentRating(4);
    }, []);
    
    const onHover = (index : number) => {
        setCurrentHoverRating(index);
    };

    const onRatingMouseEnter = () => {
        setHoverMode(true);
    };

    const onRatingMouseLeave = () => {
        setCurrentHoverRating(0);
        setHoverMode(false);
    };

    const onClick = () => {
        setCurrentRating(currentHoverRating);
    }

    const stars = [];

    for (let index = 0; index < 5; index += 1)
        stars.push(<Star
            key={ index } currentHoverRating={ currentHoverRating } currentRating={ currentRating }
            half={ half }
            hoverMode={ hoverMode }
            index={ index + 1 }
            onHover={ onHover }
        />);
    
    

    return (
        <RatingWrapper
            ref={ starsEl }
            onClick={ onClick }
            onMouseEnter={ onRatingMouseEnter }
            onMouseLeave={ onRatingMouseLeave }
        >
            {stars}
            {hoverMode ? currentHoverRating : currentRating }
        </RatingWrapper>
    );
};
