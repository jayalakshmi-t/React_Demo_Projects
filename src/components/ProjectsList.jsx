function ProjectsList(){

    const projects = [
      { title: "Portfolio Website", description: "A personal portfolio website to showcase my projects and skills." , link: "https://johndoe.com"},
      { title: "E-commerce Platform", description: "An online store built with React and Node.js.", link: "https://shopwithjohn.com" },
      { title: "Blog Application", description: "A blogging platform with user authentication and CRUD functionality.", link: "https://johnsblog.com" }
    ]
    return(
        <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {
          projects.map((project,index) => (
            <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))
        }
      </div>
      </section>
    )
}

export default ProjectsList;