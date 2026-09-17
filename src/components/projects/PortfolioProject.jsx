import "./PortfolioProject.css";

import heroImage from "./PortfolioImages/Group 28.png";

import image6 from "./PortfolioImages/image 6.png";
import image7 from "./PortfolioImages/image 7.png";
import image8 from "./PortfolioImages/image 8.png";
import image9 from "./PortfolioImages/image 9.png";
import image10 from "./PortfolioImages/image 10.png";
import image11 from "./PortfolioImages/image 11.png";
import image12 from "./PortfolioImages/image 12.png";
import image13 from "./PortfolioImages/image 13.png";
import image14 from "./PortfolioImages/image 14.png";
import image15 from "./PortfolioImages/image 15.png";
import image16 from "./PortfolioImages/image 16.png";
import image17 from "./PortfolioImages/image 17.png";
import image18 from "./PortfolioImages/image 18.png";
import image19 from "./PortfolioImages/image 19.png";


function PortfolioProject({ goBack }) {
    return (
        <section className="portfolio-project">

            <button
                className="portfolio-back-button"
                onClick={goBack}
            >
                BACK
            </button>


            {/* HERO */}

            <div className="portfolio-hero">

                <img
                    src={heroImage}
                    alt="Portfolio website"
                />

                <h1>PORTFOLIO WEBSITE</h1>

            </div>


            {/* CONTENT */}

            <div className="portfolio-content">


                {/* FIRST GALLERY */}

                <div className="portfolio-top-gallery">

                    <div className="portfolio-version">
                        <img src={image6} alt="" />
                        <span>V1</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image7} alt="" />
                        <span>V2</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image9} alt="" />
                        <span>V3</span>
                    </div>

                    <div className="portfolio-arrow">
                        <div className="arrow">
                            <div className="arrow-head">⌄</div>
                        </div>
                        
                    </div>

                    <div className="portfolio-version">
                        <img src={image8} alt="" />
                        <span>V4</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image11} alt="" />
                        <span>V5</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image10} alt="" />
                        <span>V6</span>
                    </div>

                    <div className="portfolio-arrow">
                        <div className="arrow">
                            <div className="arrow-head">⌄</div>
                        </div>
                        
                    </div>

                    <div className="portfolio-version">
                        <img src={image12} alt="" />
                        <span>V7</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image13} alt="" />
                        <span>V8</span>
                    </div>

                    <div className="portfolio-version">
                        <img src={image14} alt="" />
                        <span>V9</span>
                    </div>

                </div>


                {/* BOTTOM GALLERY */}

                <div className="portfolio-bottom-gallery">

                    <img src={image15} alt="" />

                    <img src={image16} alt="" />


                    <div className="portfolio-bottom-middle">

                        <img src={image17} alt="" />

                        <div className="portfolio-description">
                            <p>
                                This portfolio is the first website I’ve ever built, and it quickly became one of my most ambitious projects.
                                It was built with React, and every visual direction shown here was designed by me.
                                These images document the different versions of the home-page hero, from the earliest concepts to the final design.
                                Building the site taught me a huge amount, and I especially enjoyed creating a place where I can showcase my smaller hobbies and explain the process behind each project.
                            </p>
                        </div>

                    </div>


                    <img src={image18} alt="" />

                    <img src={image19} alt="" />

                </div>

            </div>

        </section>
    );
}

export default PortfolioProject;