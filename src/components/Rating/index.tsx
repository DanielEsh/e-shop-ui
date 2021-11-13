import React from 'react';

import Star from './Star';

import {
    RatingWrapper
} from "./Rating.styles";

export const Rating = () => {
    return (
        <RatingWrapper>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </RatingWrapper>
    );
};
