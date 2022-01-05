import React from "react";
import LeftSide from "./MainContainer/LeftSide";
import RightSide from "./MainContainer/RightSide";

export default function MainContainer() {
    return (
        <div className="container">
            <div className="grid-container">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}