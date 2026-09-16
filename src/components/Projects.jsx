import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import PortfolioProject from "./projects/PortfolioProject.jsx";
import NSXProject from "./projects/NSXProject.jsx";
import ClayDragonProject from "./projects/ClayDragonProject.jsx";
import PianoProject from "./projects/PianoProject.jsx";
import ChainedDragonProject from "./projects/ChainedDragonProject.jsx";
import RobloxProject from "./projects/RobloxProject.jsx";

import "./Projects.css";
import dragonImage from "./images/Dragon (9).jpg";
import webImage from "./images/website.png";
import carImage from "./images/carImage.png";
import chainedDragonImage from "./images/ChainedDragon(4).jpg";
import robloxImage from "./images/bigmonster.png";
import pianoImage from "./images/miniturePiano (11).jpg";



function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    if (selectedProject === "portfolio") {
        return <PortfolioProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }

    if (selectedProject === "dragon") {
        return <ClayDragonProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }

    if (selectedProject === "nsx") {
        return <NSXProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }
    if (selectedProject === "piano") {
        return <PianoProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }
    if (selectedProject === "chainedDragon") {
        return <ChainedDragonProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }
    if (selectedProject === "robloxProject") {
        return <RobloxProject goBack={function () {
            setSelectedProject(null);
        }} />;
    }    

    return (
        <section className="projects-section">
            {/* <p className="section-label">SELECTED WORK</p> */}
            <h1 className="projects-title"> MY PROJECTS</h1>

            <div className="projects-grid">

                <ProjectCard
                    title="Portfolio Website"
                    description = "My personal website where I save my works and share a little about myself"
                    image={webImage}
                    onClick={function () {
                        setSelectedProject("portfolio");
                    }}
                />

                <ProjectCard
                    title="Clay Dragon"
                    description = "Clay scupture of a customly designed dragon"
                    image={dragonImage}
                    onClick={function () {
                        setSelectedProject("dragon");
                    }}
                />

                <ProjectCard
                    title="Honda NSX Model"
                    description = "Blender model of the car Honda NSX(NA1)"
                    image = {carImage}
                    imageStyle={{ transform: "scale(2) translateX(3%)" }}
                    onClick={function () {
                        setSelectedProject("nsx");
                    }}
                />

                <ProjectCard
                    title="Clay Piano"
                    description = "Clay Sculpture of a miniture grand piano"
                    image = {pianoImage}
                    imageStyle={{ objectPosition: "44% center"}}
                    onClick={function () {
                        setSelectedProject("piano");
                    }}
                />

                <ProjectCard
                    title="Chained Dragon"
                    description = "Clay Scupture of a Dragon breaking free from chains"
                    image = {chainedDragonImage}
                    imageStyle={{ objectPosition: "44% center"}}
                    onClick={function () {
                        setSelectedProject("chainedDragon");
                    }}
                />

                <ProjectCard
                    title="My Roblox Game"
                    description = "Roblox game that I developed with a small group of friends"
                    image = {robloxImage}
                    onClick={function () {
                        setSelectedProject("robloxProject");
                    }}
                />

            </div>
        </section>
    );
}

export default Projects;