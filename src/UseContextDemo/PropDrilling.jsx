
function ChildA({theme}){
    return (
        <div style={{border:"2px solid black",padding:"20px"}}>
          <h1>Child A</h1>
         <ChildB theme={theme}/>
         </div>
    )
}

function ChildB({theme}){
    return (
          <div style={{border:"2px solid black",padding:"20px"}}>
            <h1>Child B</h1>
            <ThemedComponent style={{border:"2px solid black"}} theme={theme}/>
         </div>
    )
}

function ThemedComponent({theme}){
    return (
          <div style={{border:"2px solid black",padding:"20px"}}>
            The current theme is : {theme}
         </div>
    )
}



function PropParent(){

    const theme = "dark";

    return (

        <div style={{border:"2px solid black",padding:"20px"}}>
            Parent component
            <ChildA theme={theme}/>
        </div>
    )
}

export default PropParent;