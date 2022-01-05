import React, { useContext } from "react";
import { TipContext } from "../../TipContext";
import Button from "./Button";

export default function ButtonGroup() {

    const {tip, setTip} = useContext(TipContext);
    
    const buttons = [5, 10, 15, 25, 50];

    function handleClick(e) {
        setTip(e.target.name);
        e.preventDefault();
    }

    function handleChange(e) {
        setTip(e.target.value);
    }

    return (
        <div className="btn-group">
            {buttons.map(btn => (
                <Button 
                    key={btn}
                    value={btn}
                    handleClick={handleClick}
                    className={btn === Number(tip) ? "active-btn" : "inactive-btn"}
                />
            ))}
            <input type="text" onChange={handleChange} value={tip} placeholder="Custom"></input>
        </div>
    )
}