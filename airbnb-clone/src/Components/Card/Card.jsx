import React from "react";
import batman from "../../assets/batman.jpeg"
import star from "../../assets/star.svg"
import "./Card.css"

export default function Card(){
    return (<div className="card-container">
        <img src = {batman} className="card-image"/>
        <div className="card-description">
           <img src = {star} /> 
           <p><span className="rating">5.0</span> (6) USA</p>
        </div>
        <h4 className="card-heading">Lessons with Katie Zaferes</h4>
        <h4 className="card-price">From $136 / <span>person</span></h4>
    </div>)
}