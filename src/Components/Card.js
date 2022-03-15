import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Card(props) {
    return(
        <BrowserRouter>
        <div className = {props.className}>
            <div className = 'small-div'>
                <i className = {props.className}></i>
                <img src = {props.img} alt = '' />
            </div>

            <div className = 'big-div'>
                <span className = 'div-title'>
                    <Link to = {props.linkto} style={{ color: 'inherit', textDecoration: 'inherit'}}>{props.title}</Link>
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Card;