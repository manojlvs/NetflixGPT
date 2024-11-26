import React from 'react';
import GptSearchBar from './GptSearchBar';
import { Bg_Url } from '../utils/Constants';

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img className='' src={Bg_Url} alt="background img" />
            </div>
            <GptSearchBar/>
        </div>
    );
};

export default GptSearch;