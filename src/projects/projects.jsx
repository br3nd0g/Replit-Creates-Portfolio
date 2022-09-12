import '/src/projects/projects.css';
import ProjectCard from '/src/projects/projectCard';
import projectJSON from '/projectJSON'

export default function Projects() {
  
  return (
    <main id={"projectpage"}>
      
      {projectJSON["projects"].map(project => (
          <ProjectCard title={project["title"]} description={project["description"]} rating={project["rating"]} url={project["url"]} prompt={project["prompt"]} />
      ))}
      
    </main>
  )
}