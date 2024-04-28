
const InputCat = ({handleChange}) => {
    return (
    <input type="text" placeholder="Categories" onChange={(e) => handleChange(e.target.value)} /> 
    )
  }
  
  export default InputCat