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
                                the clay dragon model is one of my most proud works, measuring in at 30cm in lenght and 50 in width. 
                                THis project took a extremely long time, coming in at about 3 years. 
                                however the amount of time actualyl spent working on this project was probably around 20 hours. 
                                i tooka very long break before decidign to paint this piece. 
                                the modeling was the most time consuimgn. 
                                the painting took a total of 4 hours.
                            </p>

                            <p>
                                50x30cm
                            </p>
                            <p>
                                unamed dragon model
                            </p>
                            <p>
                                medium: Clay
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
                                    The Dragon is first made withg a skeleton model, a aluminium wire that runs through the entire model.
                                    this skeleton is then covered in tinfoil to add thickness throughout the entire body.
                                    this process saves the valuable clay and provides a structure to work off of.
                                </p>

                                <p>
                                    Afterwards, clay is used to cover the entire model and the sculpting begins.
                                    the clay medium I used is Sculpy Super, a polymer clay that requires baking to harden.
                                    with this model i had to bake several parts individually multiple times, then finally attaching and bakign the entire model.
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
                                The painting process for this model was very quick, taking approximatly 4hours in one sitting.
                                however, thinkign of the colour pallete wasnt. in the end i made a gamble and chose this.
                            </p>

                            <p>
                                The clay dragon model is one of my most
                                ambitious physical projects, and i'm extremely happy with how it came out. 
                                for the next steps, im considering in makign it into a diorama, a little knight against the world's deadliest dragon
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