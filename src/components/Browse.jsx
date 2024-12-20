import useNowPlayingMovie from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


 
const Browse = () =>{

      useNowPlayingMovie();
      usePopularMovie();
      useTopRated();
      useUpcomingMovies();
    return (
      <div className="">
        <Header />
        {/*
          MainContainer
          -VideoBackground
          -videoTitle

         SecondaryContainer
          - MovieList *n
             - Card*n 

       */}
        <MainContainer />
        <SecondaryContainer />
      </div>
    );

}


export default Browse