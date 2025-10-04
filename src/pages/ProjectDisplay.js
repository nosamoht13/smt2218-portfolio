import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === parseInt(id));
  const [popupMedia, setPopupMedia] = useState(null);

  // Close popup with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setPopupMedia(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="project">
        <h2>Project not found</h2>
      </div>
    );
  }

  const handleImageClick = (image) =>
    setPopupMedia({ type: "image", src: image });
  const handleVideoClick = (video) =>
    setPopupMedia({ type: "video", src: video });
  const handleClosePopup = () => setPopupMedia(null);

  return (
    <div className="project">
      <h1>{project.name}</h1>

      {project.sections.map((section, idx) => (
        <div key={idx} className="media-group">
          {/* Section text */}
          {section.text && (
            <div className="text">
              <p>{section.text}</p>
            </div>
          )}

          {/* Image + Video Grid */}
          <div className="media-grid">
            {section.images?.map((image, i) => (
              <img
                key={`img-${i}`}
                src={image}
                alt={`${project.name} ${i + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}

            {section.videos?.map((video, i) => (
              <div
                key={`vid-${i}`}
                className="video-container"
                onClick={() => handleVideoClick(video)}
              >
                <video muted playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          {/* PDFs */}
          {section.pdfs?.map((pdf, i) => (
            <div key={pdf} className="pdf-group">
              <div className="pdf-embed">
                <iframe
                  src={`${pdf}#zoom=page-fit`}
                  title={`PDF ${i + 1} for ${project.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Popup (image or video fullscreen) */}
      {popupMedia && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            {popupMedia.type === "image" ? (
              <img src={popupMedia.src} alt="Full view" />
            ) : (
              <video controls autoPlay>
                <source src={popupMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDisplay;
