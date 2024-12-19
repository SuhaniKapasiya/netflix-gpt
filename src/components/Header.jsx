import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
             
      })
      .catch((error) => {
       navigate("/error")
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <img
        className="w-52"
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img alt="usericon" className="w-10 h-10 " src={user?.photoURL} />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
