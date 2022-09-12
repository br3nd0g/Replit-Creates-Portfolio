import '/src/app.css'

export default function Home() {

  
  return (
    <main id={"homeMain"}>
      <div id={"homeText"}>
        <h1 id={"htTitle"}>What is/was Replit Creates?</h1>
        <p id={"htText"}>Replit Creates was a coding "challenge"/"exercise" ran by <a id={"replLink"} href={"https://replit.com/"} target="_blank" rel="noopener noreferrer">Replit</a> (who would've guessed, i know). Every weekday of August 2022, a prompt was given, and the idea was to make something from that prompt. This website is a compilation of all my creations from Replit Creates, some good, some bad. I was busy with school and other things through a lot of the month, so a lot of the quality and effort put in to things varies. Check out the projects page to see all the things I created, and the overview page to see my own overview of how I feel about what I've learnt and made. For example, this page is made with React.Js, something I've wanted to learn for a while, and ended up learning for one of the prompts!</p>
      </div>
      <img src={"/createsBanner.jpg"} id={"bannerimg"} />
    </main>    
  )
}