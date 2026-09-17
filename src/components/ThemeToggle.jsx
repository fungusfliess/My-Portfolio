import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            className="theme-toggle"
            onClick={function () {
                setDarkMode(!darkMode);
            }}
        >
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </button>
    );
}

export default ThemeToggle;
