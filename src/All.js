
import React from 'react';
import ModalWindow from "./ModalWindow";
import {Link} from "react-router-dom";

const All = (props) => {
    return (
        <>
            <div className={"container"}>

                {

                    props.datas.length > 0 ?
                        props.cards
                        : "loading"
                }
            </div>
            {
                props.showModal ?
                    <div className={"modal-cart"}>

                        {
                            <ModalWindow
                                text="Do you want to add this product ?"
                                closeicon={true}
                                close={props.hideCard}
                                actions={[
                                    <div id="btn">
                                        <Link to={'/cartcards'}><button className={"button"} onClick={props.addCart}>OK</button></Link>
                                        <button className={"button"} onClick={props.hideCard}>Cancel</button>
                                    </div>
                                ]}

                            />
                        }
                    </div> : null
            }
        </>
    );
};

export default All;
