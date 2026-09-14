import "./ProjectCard.css";

function ProjectCard({ title, onClick }) {
    return (
        <button className="project-card" onClick={onClick}>
            <h2>{title}</h2>
        </button>
    );
}

export default ProjectCard;