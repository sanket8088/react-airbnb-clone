import React from "react"
import airbnb from "../../assets/airbnb.svg"
import "./Header.css"

export default function Header(){
    return (<header className="header">
        <img src = {airbnb} /> 
    </header>)
}