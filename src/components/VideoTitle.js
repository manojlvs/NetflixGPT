import React from 'react';

const VideoTitle = ({title,overview}) => {
    return (
        <div className='pt-[25%] px-16 absolute text-white'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/2'>{overview}</p>
            <div>
                <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-50 '> Play </button>
                <button className='mx-3 text-white bg-gray-500 p-4 px-12 text-xl rounded-lg '>More Info</button>
            </div>
            
        </div>
    );
};

export default VideoTitle;