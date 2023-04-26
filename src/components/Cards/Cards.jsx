import React from "react";
import "./Cards.css";


import { FaGithub } from "react-icons/fa";

const AboutPageCard = ({ fieldName, value }) => {
  return (
    <div>
      <p className="aboutCardFieldName">{fieldName}</p>
      <p className="aboutCardValue">{value}</p>
    </div>
  );
};

const SkillCard = ({ skill, icon }) => {
  return (
    <div className="skillCard">
      {icon}
      <br />
      <h2>{skill}</h2>
    </div>
  );
};

const ProjectCard = ({name, description, link }) => {
  return ( 
      <div className="projectcard">
        <div className="bar"></div>
        <div className="projectDetails">
          <div className="projectTitle">
            <h2>{name}</h2>
          </div>
          <p className="projectDescription">{description}</p>
          <a href={link} className="link">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
  );
};







export { ProjectCard, SkillCard, AboutPageCard };
