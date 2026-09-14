import "./ClayDragonProject.css";

function ClayDragonProject({ goBack }) {
    return (
        <section>
            <button onClick={goBack}>BACK</button>

            <h1>Clay Dragon Project</h1>

            <p>This is my clay dragon project.</p>
        </section>
    );
}

export default ClayDragonProject;