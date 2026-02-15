/*

Disadvantage of UseContext without provider:

1. if the parent and child components are broken down into individual files then normal useContext won't work.
Because you will then have to export the theme context from one file and get it imported in the other
file for it to work.

2. Context is right now having a default value that is being used by the theme component.
So tomorrow, if you want to pass the same context to some other component with a different value,
you cannot do that. And for that you need provider.

what is provider?
Provider basically wraps the component and its nested components that needs access to the context value. */


import { createContext, useContext, useState } from "react";


const ThemeContext = createContext("light");

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

function GlobalComponent(){

    const theme = useContext(ThemeContext);

    return(
        <div>
            Global component
            <p>
                Current Theme is : {theme}
            </p>
        </div>
    )

}

function ContextWithProvider(){

    const[theme,setTheme] = useState("light");

    const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
}

   // const theme = "dark";

    return (

        <div style={{border:"2px solid black",padding:"20px"}}>
        <GlobalComponent/> {/*This component can have default value of themeContext only. It cant access the modified value*/}
        <ThemeContext.Provider value={theme}>
        <div>
            <p> Parent component </p>
            <button style={{margin:"2px"}} onClick={toggleTheme}>Toggle Theme</button>
            <ChildA/>
        </div>
        </ThemeContext.Provider>
        </div>
    )
}


export default ContextWithProvider;


