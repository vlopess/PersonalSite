import "./MostTech.css";
import Translator from "../../i18n/Translator.js";

export const MostTech = () => {
    return (
        <div className="container-most-tech">
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <span><Translator path="aboutMe.habilidades.title"/></span>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <p>Mobile:</p>
                    <div className="skill-box">
                        <span className="title">Dart (Flutter)</span>
                        <div className="skill-bar">
                      <span className="skill-per dart">
                        <span className="tooltip">48%</span>
                      </span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignContent: "center"}}>
                    <p>FrontEnd:</p>
                    <div className="skill-box">
                        <span className="title">Javascript (React)</span>
                        <div className="skill-bar">
                      <span className="skill-per js">
                        <span className="tooltip">24%</span>
                      </span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <p>BackEnd:</p>
                    <div className="skill-box">
                        <span className="title">Java (Spring Boot)</span>
                        <div className="skill-bar">
                        <span className="skill-per java">
                            <span className="tooltip">28%</span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}