import { useEffect, useRef, useState } from "react";


function UseRefExample(){
    
    const[stateCount,setStateCount] = useState(0);
    //const myRef = useRef("Hello World");
    //console.log(myRef.current);
    const refCount = useRef(0);

    const increaseStateCount = () => {
        setStateCount(stateCount + 1);
    };

    const increaseRefCount = () => {
        refCount.current = refCount.current + 1;
        console.log(`Trying to increment ref count : ${refCount.current}`)
    }

    useEffect(() => {
            console.log("Component Re-rendered");
        }
    )


    return(
        <div>
            <p>State count</p>
            <button onClick={increaseStateCount}>Increament State Count : {stateCount}</button>
            <p>Ref count</p>
            <button onClick={increaseRefCount}>Increament Ref Count : {refCount.current}</button>
        </div>
    )

}

export default UseRefExample;