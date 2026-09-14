import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import Projects from "./components/Projects.jsx";

function App() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <Home
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />

                <Route
                    path="/projects"
                    element={
                        <Projects darkMode={darkMode} />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;