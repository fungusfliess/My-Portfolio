import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            <p className="section-label">CONTACT</p>

            <h2 className="contact-title">
                LET'S BUILD SOMETHING.
            </h2>

            <div className="contact-links">
                <a href="mailto:your@email.com">
                    EMAIL
                </a>

                <a href="https://github.com/yourusername" target="_blank">
                    GITHUB
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank">
                    LINKEDIN
                </a>
            </div>
        </section>
    );
}

export default Contact;