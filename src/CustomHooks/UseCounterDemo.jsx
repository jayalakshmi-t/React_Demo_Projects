import useCounter from "./UseCounter";



function UseCounterDemo(){

    const initialValue = 1;
    const{count,incrementCounter,decrementCounter,reset} = useCounter(initialValue);

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseCounterDemo;