import React from 'react';
import "./Workcard.css";

//import { NavLink } from 'react-router-dom';
import Workcard from './Workcard';
import WorkCardData from "./WorkCardData";
const Work = () => {
    return (
        <div className="work-conatainer">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
               {WorkCardData.map((ele,ind)=>{
                return(
                    <Workcard 
                    key={ind}
                    imgsrc={ele.imgsrc}
                    title={ele.title}
                    text={ele.text}
                   
                    />
                )
               })}
            </div>

        </div>
    );
};

export default Work;