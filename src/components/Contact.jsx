import "./Contact.css";
import useRevealAnimation from "../hooks/useRevealAnimation.js";

function Contact() {
    const scope = useRevealAnimation();

    return (
        <section className="contact-section" ref={scope}>
            <p className="section-label reveal">CONTACT</p>

            <h2 className="contact-title reveal">
                LET'S BUILD SOMETHING.
            </h2>

            <div className="contact-links reveal">
                <a href="mailto:jerry.ning1025@gmail.com">
                    EMAIL
                </a>

                <a href="https://github.com/fungusfliess" target="_blank">
                    GITHUB
                </a>

                <a
                    className="coming-soon-link"
                    onClick={(event) => event.preventDefault()}
                >
                    LinkedIn
                    <span className="coming-soon-tooltip">COMING SOON</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;