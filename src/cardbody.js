import React, {Component, useState,useEffect} from 'react';
import Stars from "./starts";
import "./App.scss"

const CardBody =(props)=>{

    return (
        <div className="card-body"><div className="h3_span"><span className="title">{props.title}</span><i className="by">by Artist</i></div>

            <Stars addToLocalFavs={props.addToLocalFavs} deletedcart={props.deletedcart } backgroundcolor={props.backgroundcolor} details={props.details} handleFav={props.handleFav}/>

            <p className="body-content">{props.text}</p>
            <h4 className="cost">{props.price}</h4>

                <button id={"button"} onClick={props.showCart}>Add to Cart</button>

        </div>

    )

}
export  default  CardBody;
