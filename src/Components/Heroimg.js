import React from 'react';
import "./Heroimg.css";
import flower from "../assets/flower.jpg"
import {Link} from "react-router-dom";
const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask"> 
            <img className="into-img"src={flower} alt="flower" />
            </div>
            <div className="content">
                <p>HI,I'M FREE LANCER</p>
                <h1>React Devloper</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Heroimg;