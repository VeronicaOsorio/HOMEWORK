import {CompApp} from "./components/CompApp";
import {InputCat} from "./components/InputCat";
import {AddCategories} from "./components/AddCategories";
import { useState } from "react"; 
import "./index.css"
import "./App.css"

function App () {

    const [categories, setCategories] = useState([
        "ROMANCE",
        "SUSPENSO",
        "TERROR",
        "ACCION",
        "FICCION",
        "DRAMA",
        "FANTASIA",
        
    ])
    const [NewCategory, setNewCategory] = useState("")	
    
    const handleChange = (value) => {
        setNewCategory(value);
    }
    const handleClick = () => {
        setCategories([...categories, NewCategory])
    }
    return (
        <>
            <CompApp items = {categories}/>
            <InputCat handleChange = {handleChange}/>
            <AddCategories handleClick = {handleClick}/>
        </>
    )
}
export default App