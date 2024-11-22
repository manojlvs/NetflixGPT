import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        
    },reducers:{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) =>{
            state.PopularMovies = action.payload
        },
        addTopRatedMovies : (state, action) =>{
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) =>{
            state.UpcomingMovies = action.payload
        },
        addVideoTrailer :(state, action) =>{
            state.trailerVideo = action.payload
        }
    }

});
export const {addNowPlayingMovies,addVideoTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer