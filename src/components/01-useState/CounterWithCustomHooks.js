import React from 'react';
import "./counter.css";
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr></hr>

            <button onClick={ () => increment(2) } className="btn"> + 1 </button>
            <button onClick={ reset } className="btn"> Reset </button>
            <button onClick={ () => decrement(2) } className="btn"> - 1 </button>
        </>
    )
}
