import React from "react";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import "./index.css"
import {Route,Routes} from "react-router-dom";
const App=()=>{
    return(

        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
        </Routes>
        </>
    );
}
export default App;