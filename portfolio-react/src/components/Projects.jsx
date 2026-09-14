import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import PortfolioProject from "./projects/PortfolioProject.jsx";
import RaspberryPiProject from "./projects/RaspberryPiProject.jsx";
import NSXProject from "./projects/NSXProject.jsx";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    if (selectedProject === "portfolio") {
        return <PortfolioProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }

    if (selectedProject === "raspberry") {
        return <RaspberryPiProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }

    if (selectedProject === "nsx") {
        return <NSXProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }
    

    return (
        <section className="projects-section">
            <p className="section-label">SELECTED WORK</p>
            <h2 className="projects-title">PROJECTS</h2>

            <div className="projects-grid">
                <div className="projects-grid">

                    <ProjectCard
                        title="Portfolio Website"
                        onClick={function () {
                            setSelectedProject("portfolio");
                        }}
                    />

                    <ProjectCard
                        title="Raspberry Pi Game"
                        onClick={function () {
                            setSelectedProject("raspberry");
                        }}
                    />

                    <ProjectCard
                        title="Honda NSX Model"
                        onClick={function () {
                            setSelectedProject("nsx");
                        }}
                    />

                </div>
            </div>
        </section>
    );
}

export default Projects;