import { useDispatch } from "react-redux";
import { APIOPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular", APIOPTIONS);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      // console.log("getPopularMovies--------------->", data);

      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []); // Include dispatch as a dependency
};

export default usePopularMovie;
