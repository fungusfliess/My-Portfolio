import { useEffect, useState } from "react";
import ProjectFooter from "../components/ProjectFooter";

import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";

import "./Home.css";

function Home({ darkMode, setDarkMode }) {

    const [activeSection, setActiveSection] = useState("about");

    useEffect(function () {

        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

        return function () {
            document.body.classList.remove("dark-mode");
        };

    }, [darkMode]);

    return (
        <main className={darkMode ? "home dark-mode" : "home"}>

            <ThemeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Hero
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <section className="content-section">

                {activeSection === "about" && <About />}

                {activeSection === "projects" && (
                    <Projects darkMode={darkMode} />
                )}

                {activeSection === "contact" && <Contact />}

                

            </section>
                    <ProjectFooter/>
        </main>
    );
}

export default Home;