import React, {Component} from 'react';

class Pagetop extends Component {
    render() {
        return (
            <div className="top">
                <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="far fa-envelope"></i>
                </div>
                <div className={"links"}>
                    <a href="#"> Login</a>
                    <span>/</span>
                    <a href="#"> Register</a>
                    <div className="cart"><i className="fas fa-shopping-basket"></i> <span>Store</span></div>

                </div>
            </div>
        );
    }
}

export default Pagetop;
