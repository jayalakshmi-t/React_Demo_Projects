

function About(){
  const name ="John Doe";
  const profession = "Full Stack Developer";
  return(
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Hello! I'm {name}, a passionate {profession} with experience in building web applications using modern technologies.</p>
    </section>
  )

}

export default About;