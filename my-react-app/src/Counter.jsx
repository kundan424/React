import { useState } from "react"

function Counter (){
    
    const [count , setCount]  = useState(0)

    const increment = () => {

        //  takes the pending state to calculate next state
        // react puts your updater function in queue ( waiting in line )
        // During the render , it will call them in same order 
    
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    
    const decrement = () => {
        setCount ( c =>c - 1)
        setCount ( c =>c - 1)
        setCount ( c =>c - 1)
    }

    const reset = () => {
        setCount(0)
    }
    return(
        <div className="counter-container">

            <p className="counter-display">count : {count}</p>
            <button onClick={increment} className="counter-button" > increment</button>
            <button onClick={decrement} className="counter-button"> Decrement</button>
            <button onClick={reset} className="counter-button"> Reset</button>

        </div>
    )
}
export default Counter

