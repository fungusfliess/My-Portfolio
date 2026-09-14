import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

import "./Projects.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    if (selectedProject) {
        return (
            <section className="project-detail">
                <button
                    onClick={function () {
                        setSelectedProject(null);
                    }}
                >
                    BACK
                </button>

                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
            </section>
        );
    }

    return (
        <section className="projects-section">
            <ProjectCard
                title="Portfolio Website"
                onClick={function () {
                    setSelectedProject({
                        title: "Portfolio Website",
                        description: "My React, Three.js and GSAP portfolio."
                    });
                }}
            />

            <ProjectCard
                title="Raspberry Pi Game"
                onClick={function () {
                    setSelectedProject({
                        title: "Raspberry Pi Game",
                        description: "A two-player networked game using Python sockets."
                    });
                }}
            />
        </section>
    );
}

export default Projects;