import "./ProjectCard.css";

function ProjectCard({ title, description, image, imageStyle, onClick }) {
    return (
        <button className="project-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src = {image} style={imageStyle} ></img>
            
        </button>
    );
}

export default ProjectCard;