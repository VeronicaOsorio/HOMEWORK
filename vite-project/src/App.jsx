
import "./index.css"
import "./App.css"
import Counter from "./components/counter"


function App () {

    return (
        <>
            <Counter title="Contador" initialCounter={0} />
        </>
    )
}

export default App