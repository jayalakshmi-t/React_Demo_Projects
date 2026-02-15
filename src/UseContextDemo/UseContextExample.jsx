import { createContext, useContext } from "react";


const ThemeContext = createContext('light');

function ChildA(){
    return (
        <div style={{border:"2px solid black",padding:"20px"}}>
          <h1>Child A</h1>
         <ChildB/>
         </div>
    )
}

function ChildB(){
    return (
          <div style={{border:"2px solid black",padding:"20px"}}>
            <h1>Child B</h1>
            <ThemedComponent style={{border:"2px solid black"}}/>
         </div>
    )
}

function ThemedComponent(){

    const theme = useContext(ThemeContext);

    return (
          <div style={{border:"2px solid black",padding:"20px"}}>
            The current theme is : {theme}
         </div>
    )
}



function UseContextExample(){

    const theme = "dark";

    return (

        <div style={{border:"2px solid black",padding:"20px"}}>
            Parent component
            <ChildA/>
        </div>
    )
}


export default UseContextExample;