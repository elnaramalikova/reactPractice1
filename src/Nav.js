
import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                <div className={"navs"}>

                    <div className={"logo-img"}>
                        <img src={require("../src/img/logo.png")} alt=""/>
                        <strong>REACT</strong>
                    </div>


                    <div className={"nav"}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/favorites'}>Favorites</Link>
                        <Link to={'/cartcards'}>Cart Cards</Link>

                    </div>

                </div>
            </div>
        );
    }
}

export default Nav;

