import React, { useContext } from "react";
import { TipContext } from "../../TipContext";

export default function People() {

    const {people, setPeople} = useContext(TipContext);

    function handleChange(e) {
        setPeople(e.target.value);
    }

    return (
        <div className="people">
            <h3>Number of People</h3>
            {people === "0" ? <h3 className="error">Can't be zero</h3> : null}
            {people === "0" ? 
            <input type="text" className="error-input" onChange={handleChange} value={people} placeholder="0" /> :
            <input type="text" onChange={handleChange} value={people} placeholder="0" />}
            
        </div>
    )
}