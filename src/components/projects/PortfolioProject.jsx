import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PortfolioProject.css";
import useRevealAnimation from "../../hooks/useRevealAnimation.js";
import ThemeToggle from "../ThemeToggle.jsx";

gsap.registerPlugin(ScrollTrigger);

import heroImage from "./PortfolioImages/Group 28.png";

import image6 from "./PortfolioImages/image 6.png";
import image7 from "./PortfolioImages/image 7.png";
import image8 from "./PortfolioImages/image 8.png";
import image9 from "./PortfolioImages/image 9.png";
import image10 from "./PortfolioImages/image 10.png";
import image11 from "./PortfolioImages/image 11.png";
import image12 from "./PortfolioImages/image 12.png";
import image13 from "./PortfolioImages/image 13.png";
import image14 from "./PortfolioImages/image 14.png";
import image15 from "./PortfolioImages/image 15.png";
import image16 from "./PortfolioImages/image 16.png";
import image17 from "./PortfolioImages/image 17.png";
import image18 from "./PortfolioImages/image 18.png";
import image19 from "./PortfolioImages/image 19.png";


function PortfolioProject({ goBack, darkMode = true, setDarkMode }) {
    const scope = useRevealAnimation();
    const arrowScope = useRef(null);

    useLayoutEffect(function () {
        if (!arrowScope.current) return;

        const context = gsap.context(function () {
            const paths = gsap.utils.toArray(".portfolio-arrow-path");

            paths.forEach(function (path) {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: `6 6`,
                    strokeDashoffset: length
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 1.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: path.closest(".portfolio-arrow"),
                        start: "top 85%",
                        once: true
                    }
                });
            });
        }, arrowScope);

        return function () {
            context.revert();
        };
    }, []);

    return (
        <section className={darkMode ? "portfolio-project dark-mode" : "portfolio-project light-mode"} ref={scope}>

            {setDarkMode && <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />} 

            <button
                className="portfolio-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="portfolio-hero reveal">

                <img
                    src={heroImage}
                    alt="Portfolio website"
                />

                <h1>PORTFOLIO WEBSITE</h1>

            </div>


            {/* CONTENT */}

            <div className="portfolio-content" ref={arrowScope}>


                {/* FIRST GALLERY */}

                <div className="portfolio-top-gallery">

                    <div className="portfolio-version reveal">
                        <img src={image6} alt="" />
                        <span>V1</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image7} alt="" />
                        <span>V2</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image9} alt="" />
                        <span>V3</span>
                    </div>

                    <div className="portfolio-arrow">
                        <svg viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
                            <path className="portfolio-arrow-path" d="M 100 2 H 4 V 20" />
                            <polyline className="portfolio-arrow-head" points="1,16 4,20 7,16" />
                        </svg>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image8} alt="" />
                        <span>V4</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image11} alt="" />
                        <span>V5</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image10} alt="" />
                        <span>V6</span>
                    </div>

                    <div className="portfolio-arrow">
                        <svg viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
                            <path className="portfolio-arrow-path" d="M 100 2 H 4 V 20" />
                            <polyline className="portfolio-arrow-head" points="1,16 4,20 7,16" />
                        </svg>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image12} alt="" />
                        <span>V7</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image13} alt="" />
                        <span>V8</span>
                    </div>

                    <div className="portfolio-version reveal">
                        <img src={image14} alt="" />
                        <span>V9</span>
                    </div>

                </div>


                {/* BOTTOM GALLERY */}

                <div className="portfolio-bottom-gallery reveal">

                    <img src={image15} alt="" />

                    <img src={image16} alt="" />


                    <div className="portfolio-bottom-middle">

                        <img src={image17} alt="" />

                        <div className="portfolio-description">
                            <p>
                                This portfolio is the first website I’ve ever built, and it quickly became one of my most ambitious projects.
                                It was built with React, and every visual direction shown here was designed by me.
                                These images document the different versions of the home-page hero, from the earliest concepts to the final design.
                                Building the site taught me a huge amount, and I especially enjoyed creating a place where I can showcase my smaller hobbies and explain the process behind each project.
                            </p>
                        </div>

                    </div>


                    <img src={image18} alt="" />

                    <img src={image19} alt="" />

                </div>

            </div>

        </section>
    );
}

export default PortfolioProject;
