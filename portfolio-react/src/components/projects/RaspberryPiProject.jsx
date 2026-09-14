import "./RaspberryPiProject.css";

function RaspberryPiProject({ goBack }) {
    return (
        <section>
            <button onClick={goBack}>BACK</button>

            <h1>RASPBERRY PI GAME</h1>

            <p>This is my Raspberry Pi project.</p>
        </section>
    );
}

export default RaspberryPiProject;