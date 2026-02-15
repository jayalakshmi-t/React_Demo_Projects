import { useEffect, useState } from "react";
import "./DigitalClock.css";

function DigitalClock(){

const[time,setTime] = useState(new Date());


// Updating time every second
useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()),1000);
    return () => clearInterval(timerId);
}, []);

const formattedTime = time.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'})

    return (
        <div className="clock-container">
            <div className="clock">{formattedTime}</div>
        </div>
    )
}

export default DigitalClock;