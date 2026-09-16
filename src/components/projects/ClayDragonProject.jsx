import "./ClayDragonProject.css";
import ProjectFooter from "../ProjectFooter";

// ============================================================
// IMAGE IMPORTS — REPLACE THESE PATHS WITH YOUR REAL ONES
// ============================================================

import image14 from "./DragonImages/Dragon (1) 1.png";
import image2 from "./DragonImages/Dragon (2) 1.png";
import image15 from "./DragonImages/Dragon (3) 1.png";
import image10 from "./DragonImages/Dragon (6) 1.png";
import image9 from "./DragonImages/Dragon (7) 1.png";
import image11 from "./DragonImages/Dragon (8) 1.png";
import image13 from "./DragonImages/Dragon (11) 1.png";
import image12 from "./DragonImages/Dragon (12) 1.png";

import image1 from "./DragonImages/Group 21.png";
import image3 from "./DragonImages/Group 22.png";
import image8 from "./DragonImages/Group 23.png";

import image5 from "./DragonImages/UnpaintedDragon (1) 1.png";
import image4 from "./DragonImages/UnpaintedDragon (2) 1.png";
import image7 from "./DragonImages/UnpaintedDragon (4) 1.png";
import image6 from "./DragonImages/UnpaintedDragon (6) 1.png";

function ClayDragonProject({ goBack }) {

    return (

        <section className="clay-project">


            {/* ======================================================
                BACK BUTTON
            ====================================================== */}

            <button
                className="back-button"
                onClick={goBack}
            >
                BACK
            </button>



            {/* ======================================================
                PAGE HERO
            ====================================================== */}

            <div className="page-hero">

                <img
                    src={image1}
                    alt="Clay dragon"
                />

                <h1>
                    CLAY DRAGON MODEL
                </h1>

            </div>


            <div className = "content"> 
                {/* ======================================================
                    SECTION 1 — INTRODUCTION
                ====================================================== */}

                <div className="intro-section">


                    <div className="intro-content">

                        <img
                            className="intro-image"
                            src={image2}
                            alt="Clay dragon model"
                        />


                        <div className="intro-text">

                            <p>
                                This is where your introduction to the
                                clay dragon project goes. You can explain
                                why you decided to create it, what inspired
                                the design, and what materials you used.
                            </p>

                            <p>
                                You can also talk about the scale of the
                                project and some of the challenges involved
                                in creating such a large physical model.
                            </p>

                        </div>

                    </div>


                    <p className="scroll-text">
                        LEARN MORE
                        <br />
                        ↓
                    </p>

                </div>



                {/* ======================================================
                    SECTION 2 — UNPAINTED DRAGON
                ====================================================== */}

                <div className="unpainted-section">


                    {/* ---------- SECTION HERO ---------- */}

                    <div className="section-hero">

                        <img
                            src={image3}
                            alt="Unpainted clay dragon"
                        />

                        <h2>
                            THE UNPAINTED DRAGON
                        </h2>

                    </div>



                    {/* ---------- PROCESS GALLERY ---------- */}

                    <div className="process-layout">


                        <img
                            className="process-large"
                            src={image4}
                            alt="Dragon sculpting process"
                        />

                        


                        <div className="process-right">
                            
                            <div className="process-small-images">

                                <img className = "img1"
                                    src={image5}
                                    alt="Dragon sculpting detail"
                                />

                                <img className = "img2"
                                    src={image6}
                                    alt="Dragon sculpting detail"
                                />

                                <img className = "img3"
                                    src={image7}
                                    alt="Dragon sculpting detail"
                                />

                            </div>


                            <div className="process-text">

                                <p>
                                    This section can explain the construction
                                    process before the dragon was painted.
                                    Talk about how the body, wings, head, and
                                    smaller details were formed.
                                </p>

                                <p>
                                    You can also explain any problems you ran
                                    into and how the design changed throughout
                                    the sculpting process.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>



                {/* ======================================================
                    SECTION 3 — FINAL PROJECT
                ====================================================== */}

                <div className="final-section">


                    {/* ---------- FINAL HERO ---------- */}

                    <div className="section-hero final-hero">

                        <img
                            src={image8}
                            alt="Finished clay dragon"
                        />

                        <h2>
                            THE FINAL PROJECT
                        </h2>

                    </div>



                    {/* ---------- TWO LARGE PHOTOS ---------- */}

                    <div className="final-top-row">

                        <img
                            src={image9}
                            alt="Finished dragon side view"
                        />

                        <img
                            src={image10}
                            alt="Finished dragon top view"
                        />

                    </div>



                    {/* ---------- LOWER EDITORIAL GALLERY ---------- */}

                    <div className="final-gallery">


                        {/* LEFT LARGE IMAGE */}

                        <img
                            className="final-image-10"
                            src={image11}
                            alt="Finished dragon"
                        />
                        


                        {/* DESCRIPTION */}

                        <div className="final-description">

                            <p>
                                The clay dragon model is one of my most
                                ambitious physical projects. This section
                                can describe the final dimensions, materials,
                                painting process, and overall construction.
                            </p>

                            <p>
                                You can also explain what you learned from
                                completing the project and what you would
                                change if you built it again.
                            </p>

                        </div>



                        {/* SMALL LEFT */}

                        <img
                            className="final-image-11"
                            src={image12}
                            alt="Finished dragon"
                        />


                        {/* LARGE RIGHT */}

                        <img
                            className="final-image-12"
                            src={image13}
                            alt="Finished dragon"
                        />


                        {/* BOTTOM LEFT */}

                        <img
                            className="final-image-13"
                            src={image14}
                            alt="Finished dragon"
                        />


                        {/* BOTTOM RIGHT */}

                        <img
                            className="final-image-14"
                            src={image15}
                            alt="Finished dragon"
                        />


                    </div>

                </div>


            </div>


        </section>

    );

}


export default ClayDragonProject;