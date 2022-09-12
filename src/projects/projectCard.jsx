import '/src/projects/projectCard.css';

export default function ProjectCard(props) {

  const title = props.title
  const rating = props.rating
  const description = props.description
  const url = props.url
  const prompt = props.prompt
  
  return (
    <a href={url} id={"projectLink"} target="_blank" rel="noopener noreferrer">
      <div id={"card"}>
        <h1 id={"projectTitle"}>{title}</h1>
        <p id={"projectDesc"}><b>{description}</b></p>
        <p id={"promptDesc"}>Made from the prompt: {prompt}</p>
        <p id={"projectRating"}>My Rating: {rating}/10</p>
      </div>
    </a>
  )
}