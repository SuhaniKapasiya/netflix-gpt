import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse"

const Body = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmount
    return () => {
       unsubscribe(unsubscribe);
       console.log("componet is unmount inside Body ------------");
       
    }
  }, []);


  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );

}
export default Body;