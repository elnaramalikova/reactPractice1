
import React, {Component} from 'react';
import Choosen from "./Choosen";
import CardHeader from "./cardheader";


const CartCards =(props)=>{
    console.log(props.choosencarts)
    const choosencarts = props.choosencarts.map((item) => {
        return <Choosen data={item[0]} key={item[0].id} deletedcart ={props.deletedcart } />
    });
    return (
        <>
            <div className={"container cart"}>
                    <h1>Added Carts</h1>

                {

                    props. choosencarts.length > 0 ?

                        <CardHeader/>
                        : " "
                }
                {

                    props. choosencarts.length > 0 ?

                        choosencarts
                        : <p className="choosen">Please, add a card :)</p>
                }
            </div>
        </>
    );
};

export default CartCards;
