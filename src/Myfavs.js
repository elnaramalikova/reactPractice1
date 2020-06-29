import React, {Component} from 'react';
import {Link} from "react-router-dom";

import FavCards from "./FavCards";


const MyFavs =(props)=>{
    const myfavCards = props. myfavCards.map((item) => {
        return <FavCards data={item[0]} key={item[0].id} deletedcart ={props.deletedcart } />;});
    return (
        <>
            <div className={"container favs"}>
                <div >
                    <h1>My favorite cards</h1>
                </div>

                {

                    props.myfavCards.length > 0 ?
                        myfavCards
                        : <p className="favcard">No any favorite card.</p>
                }
            </div>
        </>
    );
};

export default MyFavs;
