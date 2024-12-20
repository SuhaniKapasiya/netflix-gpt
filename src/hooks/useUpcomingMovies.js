import { useDispatch } from "react-redux";
import { APIOPTIONS } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      APIOPTIONS
    );

    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;