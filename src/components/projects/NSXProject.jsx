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
                            The clay dragon model is one of my most proud works,
                            measuring in at 38cm in length and 30cm in width.
                            This project took extremely long time, coming in at
                            about 3 years. However the amount of time actually
                            spent working on this project was probably around
                            20 hours.
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