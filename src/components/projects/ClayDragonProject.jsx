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
                                The clay dragon model is one of the works I’m most proud of, measuring 30 cm in length and 50 cm in width.
                                The project spanned about three years, although the actual time I spent working on it was closer to 20 hours.
                                I took a long break before eventually returning to paint the piece.
                                The modelling was the most time-consuming stage, while the painting took about four hours in total.
                            </p>

                            <p>
                                50 × 30 cm
                            </p>
                            <p>
                                Unnamed Dragon Model
                            </p>
                            <p>
                                Medium: Clay
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
                                    The dragon began with an aluminium-wire skeleton running through the entire model.
                                    I then covered the skeleton with tinfoil to build out the body’s volume.
                                    This reduced the amount of clay needed while providing a solid structure to sculpt on top of.
                                </p>

                                <p>
                                    Afterward, I covered the structure in clay and began sculpting the final forms.
                                    I used Sculpey Super, a polymer clay that hardens when baked.
                                    Several parts had to be baked individually before I could attach them and bake the complete model.
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
                                The painting process itself was fairly quick, taking approximately four hours in one sitting.
                                Choosing the colour palette took much longer, but in the end I took a chance on this combination.
                            </p>

                            <p>
                                The clay dragon is one of my most ambitious physical projects, and I’m extremely happy with how it turned out.
                                As a possible next step, I’m considering turning it into a diorama: a small knight facing the world’s deadliest dragon.
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