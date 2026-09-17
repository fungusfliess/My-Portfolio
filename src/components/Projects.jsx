import { useEffect, useState, useLayoutEffect, useRef } from "react";
import useRevealAnimation from "../hooks/useRevealAnimation.js";

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

import gsap from "gsap";


function Projects({ darkMode = true, setDarkMode, goToSection }) {

    const [selectedProject, setSelectedProject] = useState(null);
    const projectTopRef = useRef(null);

    const scope = useRevealAnimation();


    function openProject(project) {

        document.querySelector(".content-section")?.scrollIntoView({
            behavior: "instant",
            block: "start"
        });

        setSelectedProject(project);
    }

    useLayoutEffect(function () {

        if (selectedProject === null) return;

        const frame = requestAnimationFrame(function () {

            projectTopRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

        return function () {
            cancelAnimationFrame(frame);
        };

    }, [selectedProject]);


    if (selectedProject === "portfolio") {
        return (
            <div ref={projectTopRef}>
                <PortfolioProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }


    if (selectedProject === "dragon") {
        return (
            <div ref={projectTopRef}>
                <ClayDragonProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }

    if (selectedProject === "nsx") {
        return (
            <div ref={projectTopRef}>
                <NSXProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }

    if (selectedProject === "piano") {
        return (
            <div ref={projectTopRef}>
                <PianoProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }

    if (selectedProject === "chainedDragon") {
        return (
            <div ref={projectTopRef}>
                <ChainedDragonProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }

    if (selectedProject === "robloxProject") {
        return (
            <div ref={projectTopRef}>
                <RobloxProject
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    goBack={function () {
                        setSelectedProject(null);
                    }}
                />
            </div>
        );
    }


    return (
        <section
            className={
                darkMode
                    ? "projects-section dark-mode"
                    : "projects-section light-mode"
            }
            ref={scope}
        >

            <h1 className="projects-title reveal">
                MY PROJECTS
            </h1>


            <div className="projects-grid">

                <ProjectCard
                    title="Portfolio Website"
                    description="My personal website where I save my works and share a little about myself"
                    image={webImage}
                    onClick={function () {
                        openProject("portfolio");
                    }}
                />


                <ProjectCard
                    title="Clay Dragon"
                    description="Clay sculpture of a customly designed dragon"
                    image={dragonImage}
                    onClick={function () {
                        openProject("dragon");
                    }}
                />


                <ProjectCard
                    title="Honda NSX Model"
                    description="Blender model of the car Honda NSX (NA1)"
                    image={carImage}
                    imageStyle={{
                        transform: "scale(2) translateX(3%)"
                    }}
                    onClick={function () {
                        openProject("nsx");
                    }}
                />


                <ProjectCard
                    title="Clay Piano"
                    description="Clay sculpture of a miniature grand piano"
                    image={pianoImage}
                    imageStyle={{
                        objectPosition: "44% center"
                    }}
                    onClick={function () {
                        openProject("piano");
                    }}
                />


                <ProjectCard
                    title="Chained Dragon"
                    description="Clay sculpture of a dragon breaking free from chains"
                    image={chainedDragonImage}
                    imageStyle={{
                        objectPosition: "44% center"
                    }}
                    onClick={function () {
                        openProject("chainedDragon");
                    }}
                />


                <ProjectCard
                    title="My Roblox Game"
                    description="Roblox game that I developed with a small group of friends"
                    image={robloxImage}
                    onClick={function () {
                        openProject("robloxProject");
                    }}
                />

            </div>

        </section>
    );
}


export default Projects;