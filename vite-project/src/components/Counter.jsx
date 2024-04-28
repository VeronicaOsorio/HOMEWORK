import React from "react";
import useCounter from ".Hooks/useCounter";

const Counter = ({ title = "First App", initialCounter = 0 }) => {
    const { counter, increment, decrement, reset } = useCounter(initialCounter);

    return (
        <>
            
            <h1>Counter</h1>
            
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default Counter;