import { useDispatch } from "react-redux";
import { APIOPTIONS, URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const  useNowPlayingMovie = () =>{
  //Fetch Data from TMDB API and upadte store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(URL, APIOPTIONS);

    const json = await data.json();
    // console.log("API DATA --------->", json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}


export default useNowPlayingMovie;