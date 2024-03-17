import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList.find((project) => project.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    if (!project) {
        return <div>Project not found</div>;
    }

    const allGroups = [];

    for (let i = 1; project[`images${i}`] !== undefined || project[`videos${i}`] !== undefined; i++) {
        const images = project[`images${i}`] || [];
        const videos = project[`videos${i}`] || [];

        const group = (
            <div key={i} className="media-group">
                <div className="text">
                    <p>{project[`text${i}`]}</p>
                </div>
                <hr className="divider" /> {/* Horizontal line to separate text and media */}
                <div className="media-grid">
                    {/* Render images */}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${index + 1}`}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                    {/* Render videos */}
                    {videos.map((video, index) => (
                        <video key={index} controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            </div>
        );

        allGroups.push(group);
    }

    return (
        <div className="project">
            <h1>{project.name}</h1>
            {allGroups}
            {/* Popup to display full-size image */}
            {selectedImage && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <img src={selectedImage} alt=""/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDisplay;
