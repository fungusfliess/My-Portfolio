import "./PianoProject.css";
import useRevealAnimation from "../../hooks/useRevealAnimation.js";
import ThemeToggle from "../ThemeToggle.jsx";

import heroImage from "./PianoImages/Group 24.png";

import image8 from "./PianoImages/miniturePiano (1) 1.png";
import image10 from "./PianoImages/miniturePiano (2) 1.png";
import image11 from "./PianoImages/miniturePiano (3) 1.png";
import image5 from "./PianoImages/miniturePiano (5) 1.png";
import image7 from "./PianoImages/miniturePiano (6) 1.png";
import image1 from "./PianoImages/miniturePiano (7) 1.png";
import image9 from "./PianoImages/miniturePiano (8) 1.png";
import image6 from "./PianoImages/miniturePiano (9) 1.png";
import image2 from "./PianoImages/miniturePiano (10) 1.png";
import image3 from "./PianoImages/miniturePiano (11) 1.png";

import process2 from "./PianoImages/20250328_230137 1.png";
import process4 from "./PianoImages/20250328_230139 1.png";
import process5 from "./PianoImages/20250328_230141 1.png";
import process1 from "./PianoImages/20250328_230145 1.png";
import process3 from "./PianoImages/20250328_234643 1.png";


function PianoProject({ goBack, darkMode = true, setDarkMode }) {
    const scope = useRevealAnimation();

    return (
        <section className={darkMode ? "piano-project dark-mode" : "piano-project light-mode"} ref={scope}>

            {setDarkMode && <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />} 

            {/* BACK BUTTON */}

            <button
                className="piano-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="piano-hero reveal">

                <img
                    src={heroImage}
                    alt="Miniature piano model"
                />

                <h1>
                    MINIATURE PIANO
                    <br />
                    MODEL
                </h1>

            </div>


            <div className="piano-content">


                {/* INTRO */}

                <div className="piano-intro reveal">

                    <img
                        src={image1}
                        alt="Finished miniature piano"
                    />

                    <div className="piano-intro-text">

                        <p>
                            The clay piano was one of my most complex models, with several moving parts and extremely small details.
                            I originally made it as a wedding gift for my piano teacher.
                            The project began in March 2025 and was completed in June 2025.
                            Like many of my projects, I took several long breaks in between, usually because I was busy with school.

                        </p>

                        <p>
                            Miniature Grand Piano
                        </p>

                    </div>

                </div>


                <p className="piano-learn-more">
                    LEARN MORE
                    <br />
                    ↓
                </p>


                {/* PROCESS SECTION */}

                <div className="piano-process reveal">

                    <div className="piano-process-top reveal">

                        <img className = "left-piano"
                            src={process1}
                            alt="Miniature piano construction"
                        />

                        <img className = "right-piano"
                            src={process2}
                            alt="Miniature piano construction"
                        />

                        <div className="piano-process-text">
                            <p>
                                 The most complicated part of this model was figuring out how to attach the fallboard and top lid while still allowing both to move.
                                Getting the fallboard to fit properly required hours of sanding, adding clay back, rebaking, and repeatedly adjusting the shape.
                            </p>

                        </div>

                    </div>


                    <div className="piano-process-bottom reveal">

                        <div className="piano-process-description">

                            <p>
                               
                                After shaping the fallboard, I made tiny holes in both the piano and the fallboard itself.
                                Small pieces of toothpick on each side acted as the pivot points.
                                The holes had to align precisely for the fallboard to open smoothly, and gluing the pivots required extra care so the moving parts would not become stuck.

                            </p>
                            <p>
                                Another difficult task was constructing the piano lid. It needed two hinges: one for the front section to fold over and another for the entire lid to open.
                                At this scale, a conventional hinge was too large, so I joined the pieces with tape and covered it with a clear plastic sheet.
                                I then worked the joint back and forth to create a flexible seam. The result was surprisingly clean, with very little visible marking and a smooth fold.
                            </p>

                        </div>


                        <div className="piano-small-images">

                            <img
                                src={process3}
                                alt="Piano construction detail"
                            />

                            <img
                                src={process4}
                                alt="Piano construction detail"
                            />

                        </div>


                        <img
                            className="piano-process-large"
                            src={process5}
                            alt="Miniature piano construction"
                        />

                    </div>

                </div>


                {/* FINAL GALLERY */}

                <div className="piano-gallery reveal">

                    <div className="piano-gallery-top reveal">

                        <img
                            src={image2}
                            alt="Miniature piano"
                        />

                        <img
                            src={image3}
                            alt="Miniature piano"
                        />

                    </div>


                    <div className="piano-showcase reveal">

                        <div className="piano-showcase-left">
                            <div className="piano-showcase-text">
                                <p>
                                    The final model came out very close to what I had imagined, and I was able to incorporate most of the realism I wanted.
                                    It has just under 88 keys, slightly fewer than a full-size piano, but the key-to-body proportions were calculated to closely match a real instrument.
                                    The model also includes moving components such as an opening fallboard, lid, lid stand, and removable music stand.
                                    Inside, I recreated details from a full-size grand piano, including tuning pins, strings, and the red felt.
                                </p>
                            </div>

                            <img src={image7} alt="" />
                        </div>


                        <div className="piano-showcase-middle">
                            <img src={image5} alt="" />
                            <img src={image8} alt="" />
                        </div>


                        <div className="piano-showcase-right">
                            <img src={image6} alt="" />
                            <img src={image9} alt="" />
                        </div>

                    </div>


                    <div className="piano-gallery-bottom reveal">

                        <img
                            src={image10}
                            alt="Miniature piano"
                        />

                        <img
                            src={image11}
                            alt="Miniature piano"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default PianoProject;
