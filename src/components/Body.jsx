import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

const Body = () =>{

return (
    <div>
    
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/browse" />
    </Routes>
    
    </BrowserRouter>
   </div>
)

}


export default Body;