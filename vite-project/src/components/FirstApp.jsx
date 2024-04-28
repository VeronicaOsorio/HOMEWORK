import React, { useState } from "react";

const FirstApp = ({ title = "First App", sum = 0 }) => {
    const [counter, setCounter] = useState(sum);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(sum); // Restablece el contador al valor inicial sum
    };

    return (
        <>
           

            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={() => handleAdd()}>+1</button>
            <button onClick={() => handleSubstract()}>-1</button>
            <button onClick={() => handleReset()}>Reset</button>
        </>
    );
};

export default FirstApp;
