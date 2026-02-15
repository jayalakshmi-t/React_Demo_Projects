import { useState,useEffect } from "react";
import './MouseTracker.css';

function MouseTracker(){

    const[mousePosition, setMousePosition] = useState(0);

    useEffect(() => {
            const handleMouseMove = (event) => {
                setMousePosition({x: event.clientX, y: event.clientY})
            };
            window.addEventListener('mousemove',handleMouseMove);
            console.log("Mouse move listener added");

            return() => {
                window.removeEventListener('mousemove',handleMouseMove);
                console.log("Mouse move listener removed");
            }
         }, []
    )

    return(
        <div>
            <h1>Mouse Position</h1>
            <p>X : {mousePosition.x} Y: {mousePosition.y}</p>
        </div>
    )
}

export default MouseTracker;