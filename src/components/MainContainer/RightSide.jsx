import React, { useContext } from "react";
import { TipContext } from "../TipContext";

export default function RightSide() {

    const {bill, setBill, tip, setTip, people, setPeople} = useContext(TipContext);
    let tipAmount = '0.00';
    let total = '0.00';
    
    if (bill && tip && people) {
        if (people !== "0"){
            tipAmount = (bill * (tip/100)) / people;
            total = (parseFloat(bill) + (bill * (tip/100))) / people;
        }    
    }

    const resetClass = bill || tip || people ? 'active-reset' : 'inactive-reset';

    function reset(e) {
        setBill('');
        setTip('');
        setPeople('');
    }

    function hover(e) {
        if (e.target.className === 'active-reset') {
            e.target.className = 'reset-hover'
        }
    }

    function mouseLeave(e) {
        if (e.target.className === 'reset-hover') {
            e.target.className = resetClass;
        }
    }

    return (
        <div className="right">
            <div className="results-grid">
                <div className="results-title">
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>
                <div className="results-number">${(Math.round(tipAmount*100)/100).toFixed(2)}</div>
                <div className="results-title">
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>
                <div className="results-number">${(Math.round(total*100)/100).toFixed(2)}</div>
                <button onClick={reset} onMouseEnter={hover} onMouseLeave={mouseLeave} className={resetClass}>RESET</button>
            </div>
        </div>
    )
}