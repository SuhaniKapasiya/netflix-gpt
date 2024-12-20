import { IMG_CON_URL } from "../utils/constants";


const MovieCard = ({ posterPath, title }) => {
  return (
    <div className=" w-28 flex-shrink-0 rounded-md overflow-hidden shadow-lg bg-gray-800">
      <img
        className="w-full h-46 object-cover"
        alt="posterimg"
        src={IMG_CON_URL + posterPath}
      />
      {/* <div className="p-2 text-center text-white">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
      </div> */}
    </div>
  );
};


export default MovieCard;



