import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice"; 



const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch  = useDispatch ();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
             
      })
      .catch((error) => {
       navigate("/error")
      });
  };

   const handleGptSearch =() =>{
     
    dispatch(toggleGptSearchView());

  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <img
        className="w-52"
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">

         <select className="p-2 bg-gray-900 text-white">
           {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifire} value={lang.identifire}>
             {lang.name}
            </option>
          ))
            
          }
         </select>
          
          <button className="py-2 px-4 bg-pink-950 text-white rounded-md mr-2" onClick={handleGptSearch}>Search</button>

          <img alt="usericon" className="w-10 h-10 mr-1" src={user?.photoURL} />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
