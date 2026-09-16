import "./ProjectFooter.css";

function ProjectFooter({ goBack }) {
    return (
        <>
            <footer className="project-footer">

                <button onClick={goBack}>
                    ABOUT ME
                </button>

                <button onClick={goBack}>
                    MY PROJECTS
                </button>

                <button>
                    LINKEDIN
                </button>

            </footer>

            <p className="copyright">
                © JERRY NING
            </p>
        </>
    );
}

export default ProjectFooter;