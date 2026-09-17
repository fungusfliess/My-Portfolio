import "./NSXProject.css";

import heroImage from "./CarImages/Group 26.png";
import threeViews from "./CarImages/Group 27.png";

import nsx6 from "./CarImages/nsx6 1.png";
import nsx2 from "./CarImages/nsx2 1.png";

import carImage from "./CarImages/carImage 1.png";

import acar2 from "./CarImages/ACAR2 1.png";
import acar4 from "./CarImages/ACAR4 1.png";
import acar5 from "./CarImages/ACAR5 1.png";
import acar6 from "./CarImages/ACAR6 1.png";
import acar32 from "./CarImages/ACAR32 1.png";


function NSXProject({ goBack }) {
    return (
        <section className="nsx-project">

            <button
                className="nsx-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="nsx-hero">

                <img
                    src={heroImage}
                    alt="Honda NSX 3D model"
                />

                <h1>HONDA NSX(NA1)</h1>

            </div>


            {/* MAIN CONTENT */}

            <div className="nsx-content">

                <div className="nsx-gallery">


                    {/* THREE VIEW IMAGE */}

                    <img
                        className="nsx-three-views"
                        src={threeViews}
                        alt="Honda NSX front and wireframe views"
                    />


                    {/* DESCRIPTION */}

                    <div className="nsx-description">
                        <p>
                            Personally, I find cars extrememly cool, but I'm not the most knowledgeable on them. I wouldnt consider myself "a car guy".
                            However, a very close friend of my is. He was the one who recommmeded this car model for me to model. 
                            THe HONDA NSX(NA1) is a japanese car and the one I used as reference had the wide body kit attachment.
                            I started this project back in 2023, and finished v1 a couple weeks later.
                            Recenetly I went back to this project with more experience and improved the model.
                            I was able to reduce teh triangles from some amount to some amount, heavily optimizing it.
                            In that process, I also improved the overall topology to be much neater and more professional.
                            This is now the final project, mirror and wheeless, a deliberate design choice.
                            I left it this way to tailor it for this website, leaving it with a more engineering vibe.
                            Unfinished, raw, but sexy.

                        </p>
                    </div>


                    {/* IMAGE UNDER DESCRIPTION */}

                    <img
                        className="nsx-description-image"
                        src={nsx6}
                        alt="Honda NSX 3D render"
                    />


                    {/* SECOND ROW */}

                    <img
                        className="nsx-perspective"
                        src={nsx2}
                        alt="Honda NSX perspective view"
                    />

                    <img
                        className="nsx-rear-wire"
                        src={acar32}
                        alt="Honda NSX rear wireframe"
                    />


                    {/* BOTTOM GALLERY */}

                    <div className="nsx-bottom-gallery">

                        <img
                            className="nsx-top-wire"
                            src={acar6}
                            alt="Honda NSX wireframe view"
                        />

                        <img
                            className="nsx-top-view"
                            src={carImage}
                            alt="Honda NSX top view"
                        />

                        <img
                            className="nsx-rear-view"
                            src={acar2}
                            alt="Honda NSX rear view"
                        />

                        <img
                            className="nsx-side-render"
                            src={acar4}
                            alt="Honda NSX side render"
                        />

                        <img
                            className="nsx-side-wire"
                            src={acar5}
                            alt="Honda NSX side wireframe"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default NSXProject;