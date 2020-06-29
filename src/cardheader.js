import React from "react";
import "./App.scss"
const CardHeader=(props)=> {

        return (
            <div>
            <img className="card-header" src={props.image}/>
            </div>
        )

}

export default CardHeader;
