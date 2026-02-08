

function Demo() {
 const isLoggedIn = true;

const element = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
const names = ["Alon", "Beth", "Cathy"];

function greetMessages() {
  return names.map((name, index) => (
       <h2 key={index}>Hello, {name}!</h2>
  ));
  
}

function Greeting(isMorning){
  if(isMorning)
    return <h2>Good Morning!</h2>
    else
    return <h2>Good Evening!</h2>
  }

  const time = new Date().getHours();
  const isMorning = time < 12;

  

  return (
    

    <div>
     {element}
     {names.length > 0 && <h2> You have {names.length} messages.</h2>}
     {greetMessages()}
      {Greeting(isMorning)}

      </div>
  )
}



export default Demo;
