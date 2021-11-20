import React, {forwardRef, useState} from 'react';

import Star from './Star';

import {
    RatingWrapper,
    RatingValue,
} from "./Rating.styles";


export type RatingProps = {
    halfMode?: boolean,
    editableMode?: boolean,
    defaultRatingValue?: number,
    ratingItemsCount?: number,
    onChange?: (value: number) => void,
};

export const Rating = forwardRef<HTMLUListElement, RatingProps>(({
    halfMode = true,
    editableMode = false,
    defaultRatingValue= 0,
    ratingItemsCount = 5,
    onChange,
}, ref) => {
    const [currentRating, setCurrentRating] = useState<number>(defaultRatingValue);
    const [currentHoverRating, setCurrentHoverRating] = useState<number>(0);
    const [hoverMode, setHoverMode] = useState<boolean>(false);
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
        if (onChange) onChange(currentHoverRating);

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
            />);


    return (
        <RatingWrapper
            ref={ ref }
            onClick={ onClick }
            onMouseEnter={ startHover }
            onMouseLeave={ endHover }
        >
            {ratingItems}
            <RatingValue>
                {hoverMode ? currentHoverRating : currentRating }
            </RatingValue>
        </RatingWrapper>
    );
});
