import React, { useState, createContext } from "react";

export const TipContext = createContext();

export function TipProvider(props) {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [people, setPeople] = useState('');

    return (
        <TipContext.Provider value={{bill, setBill, tip, setTip, people, setPeople}}>
            {props.children}
        </TipContext.Provider>
    )
}

