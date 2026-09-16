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

            <div className="copyright"> 
                <p>
                    © JERRY NING
                </p>
            </div>
            
        </>
    );
}

export default ProjectFooter;