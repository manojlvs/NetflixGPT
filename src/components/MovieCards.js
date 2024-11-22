import React from 'react';
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCards = ({posterpath}) => {
    return (
        <div className='w-48 pr-4 hover:scale-125'>
            <img src={IMG_CDN_URL + posterpath } alt="movie Card" />
        </div>
    );
};

export default MovieCards;