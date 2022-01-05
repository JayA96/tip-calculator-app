import React from "react";
import Bill from "./Inputs/Bill";
import ButtonGroup from "./Inputs/ButtonGroup";
import People from "./Inputs/People";

export default function LeftSide() {
    return (
        <div className="left">
            <form autoComplete="off">
                <div className="bill">
                    <h3>Bill</h3>
                    <Bill />
                </div>
                <div className="tip">
                    <h3>Select Tip %</h3>
                    <ButtonGroup />
                </div>
                <div className="people">
                <People />
                </div>
            </form>
        </div>
    )
}