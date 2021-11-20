import React from 'react';
import { Rating } from "../index";

const HalfMode = () : JSX.Element => {
    return (
        <Rating
            defaultRatingValue={ 3.5 }
            halfMode
        />
    );
};

export default HalfMode;
