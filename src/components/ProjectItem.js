import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectItem({name, thumbnail, id}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

  return (
    <div className = "projectItem" onClick ={handleClick}> 
    <div style={{backgroundImage: `url(${thumbnail})`}} className="bgImage" /> 
    <h1>{name} </h1>
    </div>
    
  );
}

export default ProjectItem