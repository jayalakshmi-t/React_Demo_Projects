import { useState } from "react";


function useCounter(initialValue=0){

    const[count,setCount] = useState(initialValue);

    const incrementCounter = () => setCount(count + 1);
    const decrementCounter = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return {count,incrementCounter,decrementCounter,reset};

}

export default useCounter;