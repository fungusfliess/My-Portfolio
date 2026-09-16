import "./ChainedDragonProject.css";

import dragon4 from "./ChainDragonImages/ChainedDragon(4) 1.png";
import dragon2 from "./ChainDragonImages/ChainedDragon(2) 1.png";
import dragon3 from "./ChainDragonImages/ChainedDragon(3) 1.png";
import dragon5 from "./ChainDragonImages/ChainedDragon(5) 1.png";


function ChainedDragonProject({ goBack }) {
    return (
        <section className="chained-project">

            <button
                className="chained-back-button"
                onClick={goBack}
            >
                BACK
            </button>
            
            <div className="chained-title">
                <h1 >
                    CHAINED DRAGON MODEL
                </h1>
            </div>

            <div className="chained-content">
              
                <div className="chained-gallery">

                    {/* LEFT SIDE */}

                    <div className="chained-left">

                        <img
                            className="chained-main-image"
                            src={dragon4}
                            alt="Chained Dragon sculpture"
                        />


                        <div className="chained-small-images">

                            <img
                                src={dragon2}
                                alt="Chained Dragon front view"
                            />

                            <img
                                src={dragon3}
                                alt="Chained Dragon rear view"
                            />

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="chained-right">

                        <div className="chained-description">
                            <p>
                                The clay dragon model is one of my most proud
                                works, measuring in at 30cm in length and 59cm
                                in width. This project took extremely long time,
                                coming in at about 3 years. However the amount
                                of time actually spent working on this project
                                was probably around 20 hours.
                            </p>
                        </div>


                        <img
                            className="chained-right-image"
                            src={dragon5}
                            alt="Chained Dragon sculpture"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ChainedDragonProject;