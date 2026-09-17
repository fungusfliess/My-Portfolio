import "./ProjectFooter.css";

function ProjectFooter({ setActiveSection }) {

    return (
        <>
            <footer className="project-footer">

                <p>
                    Any comments on my work? Email me at jerry.ning1025!
                </p>

                <button
                    onClick={function () {
                        setActiveSection("about");
                    }}
                >
                    ABOUT ME
                </button>

                <button
                    onClick={function () {
                        setActiveSection("projects");
                    }}
                >
                    MY PROJECTS
                </button>

                <button
                    onClick={function () {
                        setActiveSection("contact");
                    }}
                >
                    CONTACT
                </button>

            </footer>

            <div className="copyright">
                <p>
                    © JERRY NING
                </p>
            </div>
        </>
    );
}

export default ProjectFooter;