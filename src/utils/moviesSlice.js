import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    populargMovies:null,
    trailerVedio: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.populargMovies = action.payload;
    },

    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVedio, addPopularMovies } =
  moviesSlice.actions;
export  default moviesSlice.reducer;