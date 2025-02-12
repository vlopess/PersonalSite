import Building from "../../assets/svg/building.svg";
import Qrcode from "../../assets/png/qrcode.png";
import lain from "../../assets/gif/lain.gif";
import "./ContentAppTcc.css";
import {useNavigate} from "react-router-dom";

export const ContentAppTCC = () => {


    const navigate = useNavigate();
    const goTo = () => navigate("/");

    return (
        <>
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#fcf2e1",
                alignContent: "center"
            }}>
                <div>
                    <div className={"container-flex"}>
                        <img src={Building} alt="Building"/>
                        <div>
                            <a target={"_blank"} href="https://forms.gle/u7ULRgp12CLiNKtj7">
                                <img width={200} src={Qrcode} alt="Qrcode"/>
                                <p>Participe da pesquisa!</p>
                            </a>
                        </div>
                    </div>
                    <div style={{height: "100px", alignContent: "end"}}>
                        <h3 className={"texto-pulsante"}>Em construção...</h3>
                    </div>
                </div>
                <div>
                    <div className={"hover-container"}>>
                        <h2><span className={"hover-text"}>「CodeCraft」</span></h2>
                        <img src={lain} alt="lain dancing" className="hover-image"/>
                    </div>
                    <p>Aplicativo Educacional Gamificado</p>
                    <button onClick={goTo} className={"visited"}>Visite o meu site</button>
                </div>
            </div>
        </>
    )
}