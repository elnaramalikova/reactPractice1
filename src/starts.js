import React from "react";

const Stars =props=> {

    return (
        <>
            <a  className={props.backgroundcolor ? "colorTrue" : "colorFalse"} onClick={props.handleFav}><i className="fas fa-star" ></i></a>
        </>
    )
}

export default Stars;

