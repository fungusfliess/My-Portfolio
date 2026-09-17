import "./ProjectCard.css";

function ProjectCard({ title, description, image, imageStyle, onClick }) {
    return (
        <button className="project-card reveal" onClick={onClick}>
            <h3>{title}</h3>

            <p>{description}</p>

            <img
                src={image}
                alt={title}
                style={imageStyle}
                loading="eager"
                decoding="async"
            />
        </button>
    );
}

export default ProjectCard;