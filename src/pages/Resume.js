// Resume.jsx
import React from "react";
import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 248, 227)",
        minHeight: "100vh",
        padding: "24px 0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "0 0 16px",
          fontSize: "clamp(24px, 3vw, 36px)",
          color: "var(--ink, #665d57)",
          letterSpacing: "-0.01em",
        }}
      >
        My Resume
      </h1>

      <iframe
        src={resume}
        title="Resume"
        style={{
          width: "50%",
          height: "1000px",
          display: "block",
          margin: "0 auto",
          border: "none",
          background: "#fff",
        }}
      />
    </div>
  );
}

export default Resume;
