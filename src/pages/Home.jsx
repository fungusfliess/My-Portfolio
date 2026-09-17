import {
    useEffect,
    useState,
    useLayoutEffect,
    useRef
} from "react";

import gsap from "gsap";

import ProjectFooter from "../components/ProjectFooter.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";

import "./Home.css";


function Home({ darkMode, setDarkMode }) {

    const [activeSection, setActiveSection] = useState("about");

    const homeRef = useRef(null);


    /* ============================================================
       NAVIGATION
    ============================================================ */

    function goToSection(section) {

        setActiveSection(section);

        setTimeout(function () {

            document.querySelector(".content-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 0);

    }


    /* ============================================================
       FIRST LOAD ANIMATION
    ============================================================ */

    useLayoutEffect(function () {

        const context = gsap.context(function () {

            const timeline = gsap.timeline();


            /* Hero fades in */

            timeline.fromTo(
                ".hero",
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out"
                }
            );


            /* Car fades in */

            timeline.from(
                "#car-container",
                {
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                },
                "-=0.4"
            );


            /* FORM comes in from left */

            timeline.from(
                "#form-title",
                {
                    x: -60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.9"
            );


            /* FUNCTION comes in from right */

            timeline.from(
                "#function-title",
                {
                    x: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.8"
            );


            /* Top information appears */

            timeline.from(
                "#school-info, #top-title",
                {
                    y: -15,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                },
                "-=0.4"
            );


            /* Car metadata */

            timeline.from(
                "#metadata",
                {
                    x: 15,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                },
                "-=0.4"
            );


            /* Mouse instruction */

            timeline.from(
                "#mouse-thing",
                {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                },
                "-=0.3"
            );


            /* Scroll hint appears last */

            timeline.from(
                ".scroll-text",
                {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out"
                },
                "-=0.2"
            );

        }, homeRef);


        return function () {
            context.revert();
        };

    }, []);


    /* ============================================================
       DARK MODE
    ============================================================ */

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


    /* ============================================================
       PAGE
    ============================================================ */

    return (
        <main
            ref={homeRef}
            className={darkMode ? "home dark-mode" : "home"}
        >

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
                setActiveSection={goToSection}
            />


            <section className="content-section">

                {activeSection === "about" && (
                    <About />
                )}


                {activeSection === "projects" && (
                    <Projects
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        goToSection={goToSection}
                    />
                )}


                {activeSection === "contact" && (
                    <Contact />
                )}

            </section>


            <ProjectFooter
                setActiveSection={goToSection}
            />

        </main>
    );
}


export default Home;