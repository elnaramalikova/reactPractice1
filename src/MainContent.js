import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Nav from "./Nav";
import Pagetop from "./pagetop";
import All from "./All";
import CartCard from "./CartCard";
import MyFavs from "./Myfavs";


const Maincontent =(props)=> {

    return (
        <>

            <Pagetop />
            <Nav/>

            <Switch>
                <Route path={"/favorites"}>
                    <MyFavs myfavCards={props.myfavCards} deletedcart ={props.deletedcart}/>
                </Route>
                <Route path={"/cartcards"}>
                    <CartCard choosencarts ={props.choosencarts} deletedcart ={props.deletedcart }/>
                </Route>
                <Route exact  path={"/"}>
                    <All addCart={props.addCart} cards={props.cards} datas={props.datas} outCartHide ={props.outCartHide} hideCard ={props.hideCard} showModal={props.showModal}/>
                </Route>
            </Switch>

        </>
    );

}

export default Maincontent;
