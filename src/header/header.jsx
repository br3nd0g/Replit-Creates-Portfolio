import '/src/header/header.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header() {

  
  return (

    <header>
      <div id={"titlediv"}>
        <h1 id={"titleText"}>Replit Creates Portfolio</h1>
        <img id={"titleImg"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1024px-Repl.it_logo.svg.png"} />
      </div>
      <div id={"linkdiv"}>
        <Link to="/" className={"link activeLink"}>Home</Link>
        <Link to="/projects" className={"link"}>Projects</Link>
        <Link to="/overview" className={"link"}>Overview</Link>
      </div>
    </header>

  )
}