import "./PortfolioProject.css";

function PortfolioProject({ goBack }) {
    return (
        <section className="portfolio-project">
            <button onClick={goBack}>BACK</button>

            <h1>PORTFOLIO WEBSITE</h1>

            <p>This is my portfolio project.</p>
        </section>
    );
}

export default PortfolioProject;