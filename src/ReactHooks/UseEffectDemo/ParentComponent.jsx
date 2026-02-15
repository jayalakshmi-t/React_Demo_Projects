import MouseTracker from "./MouseTracker";
import { useState } from "react";
import './ParentComponent.css';


function ParentComponent(){
const[showComponent,setShowComponent] = useState(true);

const toggleComponent = () => {
    setShowComponent((prev) => !prev);
};

return(

    <div>
        <button onClick={toggleComponent}>{showComponent ? 'UnMount Tracker' : 'Mount Tracker'}</button>
    {showComponent && <MouseTracker/>}
     </div>
)
}


export default ParentComponent;