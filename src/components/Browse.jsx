import useNowPlayingMovie from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";


 
const Browse = () =>{

      useNowPlayingMovie();

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