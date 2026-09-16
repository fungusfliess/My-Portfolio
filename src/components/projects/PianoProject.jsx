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
                            The clay dragon model is one of my most proud
                            works, measuring in at 38cm in length and 30cm
                            in width. This project took extremely long time,
                            spanning in at about 3 years, however the amount
                            of time actually spent working on this project
                            was probably around 20 hours.
                        </p>

                        <p>
                            I took many long breaks due to deadlines in
                            school, lack of motivation and other factors.
                            This project took a lot of time, patience and
                            attention to detail.
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

                        <img
                            src={process1}
                            alt="Miniature piano construction"
                        />

                        <img
                            src={process2}
                            alt="Miniature piano construction"
                        />

                    </div>


                    <div className="piano-process-text">

                        <p>
                            The clay dragon model is one of my most proud
                            works, measuring in at 38cm in length and 30cm
                            in width. This project took extremely long time,
                            spanning in at about 3 years.
                        </p>

                    </div>


                    <div className="piano-process-bottom">

                        <div className="piano-process-description">

                            <p>
                                The clay dragon model is one of my most proud
                                works. This section can explain the construction
                                of the miniature piano, the materials you used,
                                and how you created the individual pieces.
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
                                    The clay dragon model is one of my most proud works,
                                    measuring in at 38cm in length and 30cm in width.
                                    This project took a extremely long time, coming in at
                                    about 3 years. however the amount of time actually
                                    spent working on this project was probably around
                                    20 hours. i took a very long break before deciding
                                    to paint this piece. the modelling was the most time
                                    consuming. the painting took a total of 4 hours.
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