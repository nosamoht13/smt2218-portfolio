import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
        <a href= "https://www.linkedin.com/in/samuelthomason/" target="blank" rel = "noopener noreferrer" >
        <LinkedInIcon />
        </a>
        <a href="mailto:smt22218@columbia.edu" > 
        <EmailIcon />
        </a>
        </div>
        <p> &copy; 2024 mywebsite.com</p>
        </div>
  );
}

export default Footer