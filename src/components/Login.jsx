import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth,  } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () =>{

   const  [isSingInForm, setIsSingInForm] = useState(true);
   const  [errmesssage , setErrmesssage] = useState(null);


   const email = useRef(null);
   const password = useRef(null);
   const name  = useRef(null);

   const navigate = useNavigate();

   const handleOnClickButton = ()=>{

    // console.log(email);
    // console.log(password);
    const messsage = checkValidation(email.current.value,password.current.value);
    setErrmesssage(messsage);

    if(messsage) return;


    if(!isSingInForm){
       //SignUp form
      
       createUserWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
       )
         .then((userCredential) => {
           // Signed up
           const user = userCredential.user;
           console.log(user);
          //  navigate("/browse"); 

           updateProfile(auth.currentUser, {
             displayName: name.current.value,
             photoURL: "https://avatars.githubusercontent.com/u/107610361?v=4",
           })
             .then(() => {
               // Profile updated!
               // ...
             })
             .catch((error) => {
               // An error occurred
               // ...
             });

           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrmesssage(errorCode + "-" + errorMessage);
           console.log("errmesssage", errmesssage);
           
         });


    }
    else{
      // signIN  form

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          //  navigate("/browse");

       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmesssage(errorCode + "-" + errorMessage);

          console.log("errmesssage", errmesssage);
        });

    }




   }

   const toggleSignInForm = ()=>{
     setIsSingInForm(!isSingInForm)
   }
    

    return (
      <div className=" text-white">
        <Header />

        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg"
            alt="bgimg"
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 h-auto bg-black  p-12 flex flex-col mx-auto my-36 right-0 left-0 rounded-sm opacity-80 text-white"
        >
          <h1 className="text-3xl font-bold">
            {isSingInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSingInForm && (
            <input
              ref = {name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 rounded-sm bg-slate-700 w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 rounded-sm bg-slate-700 w-full "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 rounded-sm bg-slate-700 w-full "
          />

          <p className="font-bold text-red-700 text-sm">{errmesssage}</p>
          <button
            className="p-4 my-4 bg-red-900 rounded-md"
            onClick={handleOnClickButton}
          >
            {isSingInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm" onClick={toggleSignInForm}>
            {isSingInForm
              ? " New to Netflix? Sign up now."
              : "All ready register Sign In"}
          </p>
        </form>
      </div>
    );

}

export default Login