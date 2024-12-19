import { FaPlay } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute text-white pt-[20%]  px-24 bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className=" text-sm mt-4 w-1/4">{overview}</p>

      <div className="flex  justify-between w-1/5 mt-2">
        {/* Play Button */}
        <button className="px-4 py-2 bg-white  flex gap-2 rounded-sm items-center text-black hover:bg-opacity-50">
          <FaPlay color="black" />
          Play
        </button>

        {/* More Info Button */}
        <button className="px-4 py-2 bg-gray-800  flex gap-2 rounded-sm items-center text-white  hover:bg-opacity-50">
          MoreInfo
          <BsExclamationCircle color="white" />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
