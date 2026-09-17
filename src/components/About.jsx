import "./About.css";
import useRevealAnimation from "../hooks/useRevealAnimation.js";

function About() {
    const scope = useRevealAnimation();

    return (
        <section className="about-section" ref={scope}>
            <p className="section-label reveal">ABOUT</p>

            <h2 className="about-title reveal">
                COMPUTER ENGINEERING STUDENT
            </h2>

            <p className="about-text reveal">
                I'm a Computer Engineering student interested in software,
                embedded systems, web development, and 3D design.
            </p>
        </section>
    );
}

export default About;