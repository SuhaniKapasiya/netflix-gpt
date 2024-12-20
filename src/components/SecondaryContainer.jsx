import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () =>{

   const movies = useSelector((store) => store?.movies);

    return (
      movies && (
        <div className="bg-black">
          <div className=" -mt-52 pl-5 relative z-20">
            <MovieList
              title={"Now Playing"}
              movies={movies?.nowPlayingMovies}
            />
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies?.populargMovies} />
            <MovieList
              title={"Upcoming Movies"}
              movies={movies?.upCommingMovies}
            />

            <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
          </div>
        </div>
      )
    );
};

export default SecondaryContainer;