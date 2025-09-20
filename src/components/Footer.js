import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/samuelthomason/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large"/>
        </a>
        <a href="mailto:smt22218@columbia.edu">
          <EmailIcon fontSize="large"/>
        </a>
      </div>
      <p>&copy;samthomason.com {currentYear}</p>
    </div>
  );
}

export default Footer;
