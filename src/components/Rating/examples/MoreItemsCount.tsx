import React from 'react';
import { Rating } from "../index";

const HalfMode = () : JSX.Element => {
    return (
        <Rating
            defaultRatingValue={ 3.5 }
            editableMode
            halfMode
            onChange={ (value) => console.log('value', value) }
            ratingItemsCount={ 8 }
        />
    );
};

export default HalfMode;
