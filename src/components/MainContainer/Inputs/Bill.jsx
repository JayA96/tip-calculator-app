import React, { useContext } from "react";
import { TipContext } from "../../TipContext";

export default function Bill() {

    const {bill, setBill} = useContext(TipContext);

    function handleChange(e) {
        setBill(e.target.value);
    }

    return (
        <input type="text" onChange={handleChange} value={bill} placeholder="0" />
    )
}