import { useRef } from "react";
import "./UseRefWithHTML.css";

function UseRefWithInputElement(){

    const inputRef = useRef(null);

    const focusInputRef = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow";
    }

    const resetInputHighlight = () => {
        inputRef.current.style.backgroundColor="white";
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Focus Me"/>
            <br/>
            <button onClick={focusInputRef}>Focus and highlight me!</button>
            <button onClick={resetInputHighlight}>Reset me</button>

        </div>
    )

}

export default UseRefWithInputElement;