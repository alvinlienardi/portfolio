import { useState } from "react";
import { createPortal } from "react-dom";
import githubLogo from "./assets/github-svgrepo-com.svg";

const disabledReason = ["This project was developed as part of a university course, and the code contains proprietary information and intellectual property that cannot be shared. If you have any questions about the project or would like to discuss it further, please feel free to contact me directly."];

function Project(props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleImageClick = () => {
        setIsOverlayOpen(true);
    };

    const handleOverlayClick = () => {
        setIsOverlayOpen(false);
    };

    return (
        <>
            <div className="project">
                <img 
                    src={props.image} 
                    alt="Project Image" 
                    className="display-image"
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                />
                <div className="project-info">
                    <h2>{props.title}</h2>
                    <p className="project-date">{props.date}</p>
                    <p>{props.description}</p>
                    <button disabled={!props.access} title={props.access ? "" : disabledReason[0]} onClick={() => window.open(props.link, "_blank")}>
                        <img src={githubLogo} alt="GitHub Logo" /> View Repository
                    </button>
                </div>
            </div>

            {isOverlayOpen && createPortal(
                <div className="image-overlay" onClick={handleOverlayClick}>
                    <img 
                        src={props.image} 
                        alt="Project Image Enlarged" 
                        className="overlay-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </>
    );
}

export default Project;