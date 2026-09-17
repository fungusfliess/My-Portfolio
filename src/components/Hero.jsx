import "./Hero.css";
import Car from "./Car.jsx";

function Hero({ darkMode, setDarkMode }) {

    return (
        <section className="hero">

            <Car darkMode={darkMode} />
            <div id="floor"></div>

            <h1 id="form-title">FORM</h1>
            <h1 id="function-title" >FUNCTION</h1>

            <div id="school-info">

                <div className="row">
                    <p>WATERLOO</p>
                    <img
                        className="icon"
                        id="loo-logo"
                        src={`${import.meta.env.BASE_URL}images/Waterloo.png`}
                    />
                </div>

                <p>HONOURS</p>
                <p>COMPUTER ENGINEERING</p>

            </div>

            <div id="top-title">

                <div className="row">
                    <h2>JERRY NING</h2>

                    <img
                        className="icon"
                        src={`${import.meta.env.BASE_URL}images/GitHub.png`}
                    />

                    <img
                        className="icon"
                        src={`${import.meta.env.BASE_URL}images/Instagram Circle.png`}
                    />

                    <img
                        className="icon"
                        src={`${import.meta.env.BASE_URL}images/LinkedIn.png`}
                    />
                </div>

                <p>PORTFOLIO / 2026</p>

            </div>

            <p className="scroll-text">
                        LEARN MORE <br />
                        ↓
            </p>

            <div className="highlight">

                <div id="metadata">
                    <h2>HONDA NSX (NA1)</h2>
                    <p>1991 - 2002</p>
                    <p>WIDE BODY KIT</p>
                    <p>64K tris</p>
                    <p>BLENDER / WEBGL</p>
                </div>

                <div id="mouse-thing">
                    <p>MOVE YOUR MOUSE</p>

                    <img
                        className="icon"
                        src={`${import.meta.env.BASE_URL}images/mouse.png`}
                    />
                </div>

            </div>

        </section>

        
    );
}

export default Hero;