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
                            I’ve always found cars fascinating, even though I wouldn’t consider myself a “car guy.” A close friend who knows much more about them recommended the Honda NSX (NA1) as a model for this project.
                            My reference was a Japanese NSX fitted with a wide-body kit. I started the project in 2023 and completed the first version a few weeks later.
                            More recently, I returned to the model with additional experience and rebuilt parts of it, significantly reducing the triangle count while improving the topology.
                            The final version is intentionally mirrorless and wheelless. I kept it that way for this website to give the model a more technical, work-in-progress character—unfinished and raw by design.

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