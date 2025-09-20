import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <div className="brand">Samuel Thomason</div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav id="nav-menu" className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          <NavLink to="/" end className="nav-link" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/resume" className="nav-link" onClick={() => setOpen(false)}>
            Resume
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={() => setOpen(false)}>
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
