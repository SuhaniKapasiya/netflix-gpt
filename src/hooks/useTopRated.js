import { useDispatch } from "react-redux";
import { APIOPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      APIOPTIONS
    );

    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
