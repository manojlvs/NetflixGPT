import Header from './Header';
import usenowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
    const selector = useSelector(store=>store.gpt.showGptSearch)
  
    usenowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
        <div>
            <Header/>
            {
                selector ? <GptSearch/> : <>
                 <MainContainer/>
                 <SecondaryContainer/></>
            }
        </div>
    );
};

export default Browse;