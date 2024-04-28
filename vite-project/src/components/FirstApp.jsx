import Proptypes from "prop-types";
import { useState } from "react";


const FirstApp = ({ title = "First App", sum = 0}) => {

    
    const [counter, setCounter] = useState(sum);

    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleSubstract = () =>{
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( counter )
    }



    return(
        <>
        <h1> Title </h1>
        <span> 10 </span>

        <h1>Counter</h1>
        <span> { counter } </span>
        <br></br>
        <br></br>
        <button onClick={ () => handleAdd() }> +1 </button>
        <button onClick={ () => handleSubstract() }> -1 </button>
        <button onClick={ () => handleReset() }> Reset </button>
        </>
    );
}

FirstApp.proptyes = {
    title: Proptypes.string.isRequired,
    sum: Proptypes.number.isRequired
}

export default FirstApp;