import React, {Component, useState} from "react";
import CardBody from "./cardbody";
import CardHeader from "./cardheader";

const Card= (props) => {
        return (

            <div className="card" id={props.data.id}>
                    <CardHeader  image={props.data.image}/>
                    <CardBody title={props.data.title}
                              text={props.data.text}
                              price={props.data.price}
                              addToLocal={props.addToLocal}
                              addToLocalFavs={props.addToLocalFavs}
                              deletedcart ={props.deletedcart }
                              backgroundcolor={props.backgroundcolor}
                              details={props.data}
                              showCart={props.openCart}
                              handleFav={props.handleFav}
                              addCart={props.addCart}

                    />

            </div>

        )

}

export  default Card;
