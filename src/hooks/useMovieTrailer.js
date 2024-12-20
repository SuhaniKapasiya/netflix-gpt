import { useDispatch } from "react-redux";
import { APIOPTIONS } from "../utils/constants";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVedio = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      APIOPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log("trailer", trailer);
    dispatch(addTrailerVedio(trailer));

    
  };

  useEffect(() => {
    getMovieVedio();
  }, []);
};


export default useMovieTrailer