import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies--------------->", movies);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="w-full overflow-x-scroll scrollbar-hide ">
        <div className="flex   space-x-2 ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              title={movie?.title || "Untitled"}
            /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;