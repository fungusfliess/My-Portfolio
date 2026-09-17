import "./PianoProject.css";
import ProjectFooter from "../ProjectFooter";

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


function PianoProject({ goBack }) {

    return (
        <section className="piano-project">

            {/* BACK BUTTON */}

            <button
                className="piano-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="piano-hero">

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

                <div className="piano-intro">

                    <img
                        src={image1}
                        alt="Finished miniature piano"
                    />

                    <div className="piano-intro-text">

                        <p>
                            The Clay piano was one of my most complex model, having several moving parts, and super tiny details.
                            this project was actually a wedding gift for my piano teacher.
                            This project start in march 2025, and finished in june 2025. 
                            like most my projects, i took several long breaks in between, usualyl because i was busy with school.

                        </p>

                        <p>
                            This piano model 
                        </p>

                    </div>

                </div>


                <p className="piano-learn-more">
                    LEARN MORE
                    <br />
                    ↓
                </p>


                {/* PROCESS SECTION */}

                <div className="piano-process">

                    <div className="piano-process-top">

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
                                 the most complicated part of this model was figureing how to attach the fall board, and top lid and get the top lid to fold.
                                the fall board was very difficult to get the perfect fit, requireing hours sanding, readding clay and cooking to get the perfect fit.
                            </p>

                        </div>

                    </div>


                    <div className="piano-process-bottom">

                        <div className="piano-process-description">

                            <p>
                               
                                after the fal board was shaped, tiny holes had to be made in the piano and in the fallboard itself.
                                Using a small toothpick piece at each side to serve as the axis.
                                the holes had to be perfectly aligned in order for the fallboard to properly open.
                                additionally, glueing on the toothpicks was a very careful job, as it could end up glueing to the piano and no longer able to open.

                            </p>
                            <p>
                                another extremely difficult task was contructing the piano lid. the lid has 2 hinges, one to fold the front lid over, and another to move the entire lid.
                                the front lid hindge was impossible with hindges because of its scale.
                                theres no commercial hindes that small.
                                as a solution I used tape to tape both pieces together. 
                                i then used a clear plastic sheet to cover the tape.
                                then i bended the pieces back and forth several times, creating a bendable seam.
                                this proved to be extremely sucessfull, leaving nearly no markings and very smooth fold.
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

                <div className="piano-gallery">

                    <div className="piano-gallery-top">

                        <img
                            src={image2}
                            alt="Miniature piano"
                        />

                        <img
                            src={image3}
                            alt="Miniature piano"
                        />

                    </div>


                    <div className="piano-showcase">

                        <div className="piano-showcase-left">
                            <div className="piano-showcase-text">
                                <p>
                                    The final project came out very sucessfull. I was almost able to incorperate all the realism that I wanted to.
                                    the final project has just short of 88 keys, slightly less than a typical piano. 
                                    however, the ratio of the keys to the piano is calculated and is actually almost identical to a real piano.
                                    this model also features all the moving components, including a openable fallboard, lid, lid-stand, and a removeable music stand.
                                    the interior is also almost 1:1 to a full sides grand piano.
                                    equiped with tuning knobs, strings and of course the red felts.
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


                    <div className="piano-gallery-bottom">

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