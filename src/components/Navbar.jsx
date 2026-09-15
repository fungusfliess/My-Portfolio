import "./Navbar.css";

function Navbar({ activeSection, setActiveSection }) {

    return (
        <nav className="main-nav">

            <button
                className={activeSection === "about" ? "active" : ""}
                onClick={function () {
                    setActiveSection("about");
                }}
            >
                ABOUT
            </button>

            <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={function () {
                    setActiveSection("projects");
                }}
            >
                PROJECTS
            </button>

            <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={function () {
                    setActiveSection("contact");
                }}
            >
                CONTACT
            </button>

        </nav>
    );
}

export default Navbar;