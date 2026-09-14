import "./NSXProject.css";

function NSXProject({ goBack }) {
    return (
        <section>
            <button onClick={goBack}>BACK</button>

            <h1>HONDA NSX MODEL</h1>

            <p>This is my NSX project.</p>
        </section>
    );
}

export default NSXProject;