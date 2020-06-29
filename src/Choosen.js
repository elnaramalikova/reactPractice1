import React, {Component} from 'react';
import Stars from "./starts";
import cross from "./img/cross.png"
import "./App.scss"

const Choosen =props=> {

    return (
        <div className="card">

            <img className="card-header" src={props.data.image}/>
        <div className="card-body" id={props.data.id}>

            <div className="h3_span"><span className="title">{props.data.title}</span><i className="by">by Artist</i></div>

            <Stars addToLocalFavs={props.addToLocalFavs} deletedcart={props.deletedcart} backgroundcolor={props.backgroundcolor} details={props.details}/>

            <p className="body-content">{props.data.text}</p>
            <h4 className="cost">{props.data.price}</h4>

            <button id="button" onClick={props.deletedcart} >
                <img src={cross} alt=""/></button>


        </div>
            </div>
    );

}

export default Choosen;

