import useNowPlayingMovie from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import usePopularMovie from "../hooks/usePopularMovie";


 
const Browse = () =>{

      useNowPlayingMovie();
      usePopularMovie();

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