import "./ChainedDragonProject.css";
import useRevealAnimation from "../../hooks/useRevealAnimation.js";
import ThemeToggle from "../ThemeToggle.jsx";

import dragon4 from "./ChainDragonImages/ChainedDragon(4) 1.png";
import dragon2 from "./ChainDragonImages/ChainedDragon(2) 1.png";
import dragon3 from "./ChainDragonImages/ChainedDragon(3) 1.png";
import dragon5 from "./ChainDragonImages/ChainedDragon(5) 1.png";


function ChainedDragonProject({ goBack, darkMode = true, setDarkMode }) {
    const scope = useRevealAnimation();
    return (
        <section className={darkMode ? "chained-project dark-mode" : "chained-project light-mode"} ref={scope}>

            {setDarkMode && <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />} 

            <button
                className="chained-back-button"
                onClick={goBack}
            >
                BACK
            </button>
            
            <div className="chained-title">
                <h1 >
                    CHAINED DRAGON MODEL
                </h1>
            </div>

            <div className="chained-content">
              
                <div className="chained-gallery reveal">

                    {/* LEFT SIDE */}

                    <div className="chained-left reveal">

                        <img
                            className="chained-main-image"
                            src={dragon4}
                            alt="Chained Dragon sculpture"
                        />


                        <div className="chained-small-images">

                            <img
                                src={dragon2}
                                alt="Chained Dragon front view"
                            />

                            <img
                                src={dragon3}
                                alt="Chained Dragon rear view"
                            />

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="chained-right reveal">

                        <div className="chained-description">
                            <p>
                                The chained dragon began as a Grade 9 school assignment: create a cube without using glue.
                                I decided to take the prompt in a more creative direction and built a dragon sculpture, using the chains to represent the edges of the cube.
                                Instead of glue, I used clay to hold the structure together.
                            </p>
                        </div>


                        <img
                            className="chained-right-image"
                            src={dragon5}
                            alt="Chained Dragon sculpture"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ChainedDragonProject;
