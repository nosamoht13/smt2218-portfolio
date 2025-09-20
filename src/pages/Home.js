import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import me from "../assets/me.jpg";


function Home() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    if (isLightboxOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isLightboxOpen]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <h1>Hi, I'm Sam Thomason</h1>
          <p>A Mechanical Engineering Senior at Columbia University</p>
          <div className="cta">
            <Link to="/projects" className="btn">View Projects</Link>
            <Link to="/resume" className="btn btn--ghost">Resume</Link>
          </div>
        </div>

        <div className="hero-right">
          {/* Clickable frame; hover scales border + image together */}
          <div
            className="photo-frame"
            role="button"
            tabIndex={0}
            aria-label="Open portrait image"
            onClick={() => setIsLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
          >
            <img src={me} alt="Sam Thomason" />
          </div>
         
        </div>
      </section>
      <hr className="page-divider" />

      <section className="about">
  <div className="about-text">
    <h2>About me</h2>
    <p>
      I am a senior mechanical engineering student originally from Moorestown, NJ.
    </p>
    <p>
      I am especially interested in mechanical design, manufacturing, and prototyping—particularly
      within aerospace systems.
    </p>
    <p>
      Feel free to look around my website, and absolutely contact me!
    </p>
  </div>

  <div className="about-skills">
    <h3>Skills</h3>
    <ul className="skills">
      <li>SOLIDWORKS</li>
      <li>Autodesk Fusion 360</li>
      <li>Engineering Drawings</li>
      <li>Computer-Aided Design (CAD)</li>
      <li>CAD/CAM</li>
      <li>Finite Element Analysis (FEA)</li>
      <li>3D Printing</li>
      <li>CNC Milling</li>
      <li>Laser Cutting</li>
      <li>Lathe</li>
      <li>Aircraft Manufacturing</li>
      <li>STCs & 14 CFR Part 25 Compliance</li>
    </ul>
  </div>
</section>

      {isLightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setIsLightboxOpen(false)}
        >
          <img
            src={me}
            alt="Sam Thomason"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
