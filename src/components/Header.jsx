

function Header({name,profession,age,isMember,hobbies,onhobbyClick}){
    return (
    <header className="header">
      <h1>{name}</h1>
      <p>{profession}</p>
       <p>Age: {age + 1}</p>
        <p>{isMember ? "Member" : "Guest"}</p>
        <p> Hobbies: 
            <ul>
                {
                    hobbies.map((hobby,index) => {
                        return(
                        <li key={index} onClick={() => onhobbyClick(hobby)}>{hobby}</li> 
                        );
                    })
                }
            </ul>
        </p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    );
}

export default Header;