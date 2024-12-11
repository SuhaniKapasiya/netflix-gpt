import {  Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import {auth} from "../utils/firebase"
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse"

const Body = () =>{


    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;

          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );

            navigate("/browse");

        } else {
          // User is signed out
            dispatch(removeUser);
            navigate("/");
        }
      });
    }, []);


return (
  <div>
      
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element = {<Browse/>} />
        </Routes>
  </div>
);

}


export default Body;