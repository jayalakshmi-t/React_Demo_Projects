import { useState } from "react";

function UseStateDemo(){

    const[count,setCount] = useState(0);
    const[step,setStep] = useState(1);

    const incrementCount = () => {
        setCount(count + step);
    }

    const decrementCount = () => {
        setCount(count - step)
    }

    const incrementTwice = () => {
        // this wont work because State updates are async so we need updater function for multiple state updates
       // setCount(count + 1);
        //setCount(count + 1);

        //----- Updater function ----
        setCount(c=>c+1); // It takes the prev count value and adds 1
        setCount(c=>c+1);
    }

    return(
        <div>
            <h1>Counter value: {count}</h1>
           {/* } <button onClick = {() => setCount(count +1)}>Increment</button>
            <button onClick = {() => setCount(count -1)}>Decrement</button> */ }
            <input  type='number' 
                    value = {step}
                    onChange = {(e) => setStep(parseInt(e.target.value))}/>
            <button onClick = {incrementCount}>Increment</button>
            <button onClick = {decrementCount}>Decrement</button> 
            <button onClick = {incrementTwice}>+2</button> 
        </div>
    )


}

export default UseStateDemo;