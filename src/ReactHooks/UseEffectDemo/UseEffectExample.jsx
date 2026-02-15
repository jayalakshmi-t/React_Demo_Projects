import { useEffect, useState } from "react";


function UseEffectExample(){

const [count,setCount] = useState(0);

useEffect(() => {
    document.title = `Count: ${count}`;
}
)


const incrementCount = () => {
    setCount(count + 1);
};


    return(
        <div>
            <h1>
                UseEffectHook
                <button onClick={incrementCount}>Increment</button>
            </h1>
        </div>
    )
}

export default UseEffectExample;