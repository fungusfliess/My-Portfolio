import "./RobloxProject.css";

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


function RobloxProject({ goBack }) {
    return (
        <section className="roblox-project">

            <button
                className="roblox-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="roblox-hero">

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

                <div className="roblox-boat-section">

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
                            As a roblox developer for many years, this was my most ambitious project.
                            this started as an escape route for a game me and my friends were working on but eventually failed.
                            as a last resort with only a month left of summer break, we pivoted to making a newer and supposedly simplier game.
                            the idea at first was simple, we were going to make a rougue like endless boat game. 
                            players would sail endlessly across and infinite ocean and encounter procedurally generated islands.
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

                <div className="roblox-environment">

                    <img src={image5253} alt="" />

                    <img src={foggyWater} alt="" />

                </div>


                {/* ==================================================
                    MONSTER DEVELOPMENT
                ================================================== */}

                <div className="roblox-monster-section">

                    <div className="roblox-description roblox-monster-description">
                        <p>
                            As we made progress we began to relize that the game wasnt as fun as we anticipated.
                            as a solution, we added more and more features to try and make the game more enjoyable.
                            however, the more features we added, the further the end seemed and eventually we gave up.
                            But, I didnt. after taking a break and focusing on school, I came back to the game with even more ambition.
                            Getting the team back proved difficult, but there was no way i alone, an 3d modler could carry the entire project.
                            after much struggle, we were able to push out a couple more updates till eventually progress slowed to a halt, again.
                            however this time, I didnt stop, i decided to take matters into my own hands and contined to progress.
                            i learned UI design, blender 3d animations, programming. 
                            But i'm not a super human, this transition took no even half a year. I had to use soemthing else for help.
                            for the pogramming I used Chatgpt to accelerate the process. 
                            as an exprienreced programmer, but new to LUA, this was a learning experience.
                            I looked through the AIs code, relenetlsy tested it and tried my best to try and understand the logic behind it all.
                            But finally, my time had other places to be. 
                            now this game is at a state where most functions are complete and just require slight polishing.
                            i hope to return this project someday and im very proud of the work I was able to achieve.
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

                <div className="roblox-final-gallery">

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