import { useState } from "react";
import Header from "./Header"

const Login = () =>{

   const  [isSingInForm, setIsSingInForm] = useState(true);


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

        <form className="absolute w-3/12 h-auto bg-black  p-12 flex flex-col mx-auto my-36 right-0 left-0 rounded-sm opacity-80 text-white">
          <h1 className="text-3xl font-bold">
            {isSingInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSingInForm &&
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 rounded-sm bg-slate-700 w-full"
            />
          }
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 rounded-sm bg-slate-700 w-full "
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 rounded-sm bg-slate-700 w-full "
          />

          <button className="p-4 my-4 bg-red-900 rounded-sm">Sign In</button>

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