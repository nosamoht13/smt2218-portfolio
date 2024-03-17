import React from 'react'
import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <div>
        <iframe src={resume} title="Resume" style={{ width: '100%', height: '800px' }}></iframe>
    </div>
  )
}

export default Resume