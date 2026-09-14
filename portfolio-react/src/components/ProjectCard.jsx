import "./ProjectCard.css";

function ProjectCard({ title, onClick }) {
    return (
        <button className="project-card" onClick={onClick}>
            <h3>{title}</h3>
        </button>
    );
}

export default ProjectCard;