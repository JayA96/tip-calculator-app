import React from "react";

export default function Button(props) {
    return (
        <button name={props.value} className={props.className} onClick={props.handleClick}>{props.value}%</button>
    )
}