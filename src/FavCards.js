import React, {Component} from 'react';
import Stars from "./starts";
import cross from "./img/cross.png";

const FavCards = (props)=> {
    console.log(props.data.title)
    return (
        <div className="card">
        <img className="card-header" src={props.data.image}/>
        <div className="card-body">
            <div className="h3_span"><span className="title">{props.data.title}</span><i className="by">by Artist</i></div>

            <Stars deletedcart ={props.deletedcart} backgroundcolor={props.backgroundcolor} details={props.details}/>

            <p className="body-content">{props.data.text}</p>
            <h4 className="cost">{props.data.price}</h4>
            <button id="button" onClick={props.deletedcart} >
                <img src={cross} alt=""/></button>


        </div>
            </div>
    );

}

export default FavCards;
