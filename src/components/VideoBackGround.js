import { useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo';


const VideoBackGround = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieVideo(movieId)

    return (
        <div>
           <iframe className='w-screen aspect-video' 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
 
        </div>
    );
};

export default VideoBackGround;