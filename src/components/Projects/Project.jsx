import { ProjectCard } from "../Cards/Cards"
import "./Project.css"
export const Project=()=>{
    return(
        // <h1>Projects</h1>
        <section id="Projects" className="projectCard">
            <h1>Some of My Projects</h1>
            <div className="projectContainer">
            <ProjectCard  name="Decentralized KYC Sharing" description="Web3 Application" link="https://github.com/hishanstha420/FYP"/>
            <ProjectCard name="Tenzies Game" description="Built on React Js" link="https://github.com/hishanstha420/Tenzies"/>
            <ProjectCard name="Portfolio" description="Built on React Js" link="https://github.com/hishanstha420/Portfolio" />
            <ProjectCard name="TODO App" description="Built on Node Js" link="https://github.com/hishanstha420/TODO"/>    
            </div>
        </section>                   
    )
}