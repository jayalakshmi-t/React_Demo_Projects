import { useState } from "react";
import "./ColorPicker.css"

function ColorPicker(){

    const[backgroundcolor,setbackgroundColor] = useState("#ffffff");

    const colors = ["#ff0000", "#00ff00", "#0000ff","#ff00ff"];

    const handleColorChange = (color) => {
        setbackgroundColor(color);
    }

    return(
        <div>
            <h1>Color Picker</h1>
            <div style={{backgroundColor:backgroundcolor}}>
                {colors.map((color,index) => (  
                    <div className="colorBox"
                         style={{backgroundColor:color}}
                         key={index}
                         onClick={()=>handleColorChange(color)}>

                    </div>
                )
            )}
            </div>

            {/* Custom Color Picker */}
            <div>
                <input type="color" 
                    onChange={(e) => handleColorChange(e.target.value)}/>
            </div>
        </div>
    )

}

export default ColorPicker;