// Projects.js
import React from 'react'
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1 className="page-title">My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            thumbnail={project.thumbnail}
            id={idx}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
