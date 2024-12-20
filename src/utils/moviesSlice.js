import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    populargMovies: null,
    topRatedMovies: null,
    trailerVedio: null,
    upCommingMovies:null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.populargMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies:(state ,action)=>{
       state.upCommingMovies = action.payload;
   } ,
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVedio,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export  default moviesSlice.reducer;