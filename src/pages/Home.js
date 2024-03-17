import React from 'react';
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Sam Thomason</h2>
        <div className="prompt"> 
          <p>A MechE in the city of New York</p>
          <a href="https://www.linkedin.com/in/samuelthomason/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:smt22218@columbia.edu"> 
            <EmailIcon />
          </a>
        </div>
      </div> 
      <div className="skills"> 
        <h1>Skills:</h1>
        <div className="skill-container">
          <div className="skill-category">
            <h2>Engineering</h2>
            <ul>
              <li>Solidworks</li>
              <li>FUSION 360</li>
              <li>CNC</li>
              <li>Milling Machine</li>
              <li>Lathe</li>
            </ul>
          </div>
          <div className="skill-category">
            <h2>Interpersonal</h2>
            <ul>
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Startup Environments</li>
              <li>Multitasking</li>
              <li>Collaborative Problem Solving</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
          <div className="skill-category">
            <h2>Languages</h2>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>Python</li>
              <li>Arduino</li>
              <li>Spanish</li>
              <li>Slovak</li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Home;
