import React from 'react';
import "./counter.css";

export const CounterWithCustomHooks = () => {
    return (
        <>
            <h1>Counter with Hook: { 0 }</h1>
            <hr></hr>

            <button className="btn"> + 1 </button>
            <button className="btn"> - 1 </button>
        </>
    )
}
