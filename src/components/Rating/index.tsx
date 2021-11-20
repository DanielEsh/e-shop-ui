import React, {FC, useRef, useEffect, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export type RatingProps = {
    halfMode: boolean,
    editableMode: boolean,
};

export const Rating: FC<RatingProps> = ({
    halfMode = false,
    editableMode = true,
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

    const startHover = () => {
        if (editableMode) setHoverMode(true);
    };

    const endHover = () => {
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
            half={ halfMode }
            hoverMode={ hoverMode }
            index={ index + 1 }
            onHover={ onHover }
        />);
    
    

    return (
        <RatingWrapper
            ref={ starsEl }
            onClick={ onClick }
            onMouseEnter={ startHover }
            onMouseLeave={ endHover }
        >
            {stars}
            {hoverMode ? currentHoverRating : currentRating }
        </RatingWrapper>
    );
};
