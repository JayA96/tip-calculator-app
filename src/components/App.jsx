import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Attribution from "./Attribution";
import { TipProvider } from "./TipContext";

export default function App() {
    return (
        <div>
            <Header />
                <TipProvider>
                    <MainContainer />
                </TipProvider>
            <Attribution />
        </div>
    )
}