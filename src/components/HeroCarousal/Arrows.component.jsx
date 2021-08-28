import React from "react";

export const NextArrow = (props) => {
    //props will pass classnames , inline styles, on click function
    return (
        <>
            <div className={props.className} style={{ ...props.style, backgroundColor: "black" }} onClick={props.onClick} />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div className={props.className} style={{ ...props.style, backgroundColor: "black" }} onClick={props.onClick} />
        </>
    );
};