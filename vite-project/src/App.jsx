import CompApp from "./CompApp";
import InputCat from "./InputCat";
import AddCategories from "./AddCategories";
import { useState } from "react"; 



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