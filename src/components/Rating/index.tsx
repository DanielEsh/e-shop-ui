import React, {FC, useRef, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export type RatingProps = {
    halfMode: boolean,
    editableMode: boolean,
    defaultRatingValue: number,
    ratingItemsCount: number,
    onChange: (value: number) => void,
};

export const Rating: FC<RatingProps> = ({
    halfMode = true,
    editableMode = false,
    defaultRatingValue= 4.5,
    ratingItemsCount = 8,
    onChange,
}) => {
    const [currentRating, setCurrentRating] = useState<number>(defaultRatingValue);
    const [currentHoverRating, setCurrentHoverRating] = useState<number>(0);
    const [hoverMode, setHoverMode] = useState<boolean>(false);
    const starsEl = useRef<HTMLDivElement>(null);
    const ratingItems = [];

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
        if (editableMode) setCurrentRating(currentHoverRating);
        onChange(currentRating);
    }

    for (let index = 0; index < ratingItemsCount; index ++)
        ratingItems.push(
            <Star
                key={ index }
                currentHoverRating={ currentHoverRating }
                currentRating={ currentRating }
                half={ halfMode }
                hoverMode={ hoverMode }
                index={ index + 1 }
                onHover={ onHover }
            />
        );
    
    

    return (
        <RatingWrapper
            ref={ starsEl }
            onClick={ onClick }
            onMouseEnter={ startHover }
            onMouseLeave={ endHover }
        >
            {ratingItems}
            {hoverMode ? currentHoverRating : currentRating }
        </RatingWrapper>
    );
};
