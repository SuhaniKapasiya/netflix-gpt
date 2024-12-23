import useNowPlayingMovie from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


  // {
    //Planing 
  //         MainContainer
  //         -VideoBackground
  //         -videoTitle

  //        SecondaryContainer
  //         - MovieList *n
  //            - Card*n 
       
  // }
 
const Browse = () =>{

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
      useNowPlayingMovie();
      usePopularMovie();
      useTopRated();
      useUpcomingMovies();

    return (
      <div className="">
        <Header />

        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      
      </div>
    );

}


export default Browse