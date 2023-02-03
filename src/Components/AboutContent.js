import "./AboutContent.css";
import pro4 from "../assets/pro4.jpg"
import pro5 from "../assets/pro5.jpg"
import React from 'react';
import {Link} from "react-router-dom"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>WHO AM I?</h1>
                <p>I am a react front-end devloper.I create secure websites.</p>
                <Link to="/contact">
                    <button className="btn">contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={pro4} alt="true" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={pro5} alt="true" className="img" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutContent;