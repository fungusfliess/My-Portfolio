import "./RobloxProject.css";
import useRevealAnimation from "../../hooks/useRevealAnimation.js";
import ThemeToggle from "../ThemeToggle.jsx";

import heroImage from "./RobloxImages/Group 25.png";

import image04 from "./RobloxImages/Screenshot 2026-09-15 204831 1.png";
import unfinishedBoat from "./RobloxImages/unfinishedBoat 1.png";
import blenderCherry from "./RobloxImages/blenderCherry 1.png";
import image4 from "./RobloxImages/image 4.png";

import image5253 from "./RobloxImages/Screenshot_2026-03-12_at_1.52.53_PM 1.png";
import foggyWater from "./RobloxImages/foggyWater 1.png";

import whale from "./RobloxImages/WHALE 1.png";
import bigMonster from "./RobloxImages/bigmonster 1.png";
import unfinishedMonster3 from "./RobloxImages/unfinishedMonster 3.png";
import unfinishedMonster2 from "./RobloxImages/unfinishedMonster2 1.png";

import image838 from "./RobloxImages/Screenshot 2026-09-15 204838 1.png";
import image208 from "./RobloxImages/Screenshot_2026-05-05_at_2.41.04_PM 1.png";
import image846 from "./RobloxImages/Screenshot 2026-09-15 204846 1.png";
import image831 from "./RobloxImages/Screenshot 2026-09-15 205208 1.png";


function RobloxProject({ goBack, darkMode = true, setDarkMode }) {
    const scope = useRevealAnimation();
    return (
        <section className={darkMode ? "roblox-project dark-mode" : "roblox-project light-mode"} ref={scope}>

            {setDarkMode && <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />} 

            <button
                className="roblox-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="roblox-hero reveal">

                <img
                    src={heroImage}
                    alt="Roblox game"
                />

                <h1>ROBLOX GAME</h1>

            </div>


            <div className="roblox-content">


                {/* ==================================================
                    BOAT DEVELOPMENT
                ================================================== */}

                <div className="roblox-boat-section reveal">

                    <img
                        className="roblox-boat-1"
                        src={image208}
                        alt=""
                    />

                    <img
                        className="roblox-boat-2"
                        src={unfinishedBoat}
                        alt=""
                    />

                    <div className="roblox-description roblox-boat-description">
                        <p>
                            After years of developing on Roblox, this became my most ambitious game project.
                            It began as a backup idea after a different game my friends and I were building fell through.
                            With only about a month of summer left, we pivoted to what we thought would be a simpler concept: a roguelike endless-boating game.
                            Players would sail across an infinite ocean and encounter procedurally generated islands along the way.
                        </p>
                    </div>

                    <img
                        className="roblox-boat-3"
                        src={blenderCherry}
                        alt=""
                    />

                    <img
                        className="roblox-boat-4"
                        src={image4}
                        alt=""
                    />

                </div>


                {/* ==================================================
                    ENVIRONMENT
                ================================================== */}

                <div className="roblox-environment reveal">

                    <img src={image5253} alt="" />

                    <img src={foggyWater} alt="" />

                </div>


                {/* ==================================================
                    MONSTER DEVELOPMENT
                ================================================== */}

                <div className="roblox-monster-section reveal">

                    <div className="roblox-description roblox-monster-description">
                        <p>
                            As development continued, we realized the game wasn’t as fun as we had expected. We kept adding features to make it more engaging, but each addition pushed the finish line further away, and eventually the team stepped away from the project.
                            After taking a break to focus on school, I returned with even more ambition. Reassembling the team was difficult, and as a 3D modeller I knew I couldn’t carry every part of the project alone. We managed to release a few more updates before progress slowed again.
                            This time, I kept going independently. I taught myself UI design, Blender animation, and more programming so I could continue building the game. Because I already had programming experience but was new to Lua, I also used ChatGPT to accelerate parts of the development process while I learned. I reviewed the generated code, tested it repeatedly, and worked to understand the logic behind it rather than simply dropping it into the project.
                            Eventually, other priorities took over. The game is now at a point where most of its major systems are complete and mainly need polishing. I hope to return to it someday, and I’m proud of how much I learned by pushing the project as far as I did.
                        </p>
                    </div>

                    <img
                        className="roblox-whale"
                        src={whale}
                        alt=""
                    />

                    <img
                        className="roblox-big-monster"
                        src={bigMonster}
                        alt=""
                    />

                    <img
                        className="roblox-monster-side"
                        src={unfinishedMonster3}
                        alt=""
                    />

                    <img
                        className="roblox-monster-front"
                        src={unfinishedMonster2}
                        alt=""
                    />

                </div>


                {/* ==================================================
                    FINAL GAME IMAGES
                ================================================== */}

                <div className="roblox-final-gallery reveal">

                    <img
                        className="roblox-final-1"
                        src={image838}
                        alt=""
                    />

                    <img
                        className="roblox-final-2"
                        src={image831}
                        alt=""
                    />

                    <img
                        className="roblox-final-3"
                        src={image846}
                        alt=""
                    />

                    <img
                        className="roblox-final-4"
                        src={image04}
                        alt=""
                    />

                </div>

            </div>

        </section>
    );
}

export default RobloxProject;
