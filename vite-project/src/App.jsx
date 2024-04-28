

import CategorieInput from "./components/CategorieInput";
import AddCategories from "./components/AddCategories";
import { useState } from "react"; 
import "./index.css"
import "./App.css"
import GiftGrid from "./components/GiftGrid";



function App () {

    const [categories, setCategories] = useState([])
    const [NewCategory, setNewCategory] = useState("")	
    
    const handleChange = (value) => {
        setNewCategory(value);
    }
    const handleClick = () => {
        setCategories([...categories, NewCategory])
    }
    return (
        <>
            <CategorieInput handleChange = {handleChange}/>
            <AddCategories handleClick = {handleClick}/>
            {categories.map(category => <GiftGrid category={category}/>)}   
        </>
    )
}

export default App