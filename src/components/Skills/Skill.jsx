import { SkillCard } from "../Cards/Cards"
import { FaHtml5, FaCss3,FaJs, FaReact } from "react-icons/fa"
import "./Skill.css"
export const Skills =()=>{
    return(
        <section id="Skills" className="skills">
            <h1>My Skills</h1>
        <div className="skillsCards">
            <SkillCard skill="HTML" icon={<FaHtml5 size={30}/> } />
            <SkillCard skill="CSS" icon={<FaCss3 size={30}/> } />
            <SkillCard skill="Javascript" icon={<FaJs size={30}/> } />
            <SkillCard skill="React" icon={<FaReact size={30}/>}/>
        </div>
        </section>

    )
}