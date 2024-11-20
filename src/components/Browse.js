import Header from './Header';
import usenowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';


const Browse = () => {
  
    usenowPlayingMovies()
    return (
        <div>
            <Header/>
            <MainContainer/>
        </div>
    );
};

export default Browse;