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
            <div className={"column-flex"}>
                <div>
                    <div className={"container-flex"}>
                        <img id={"building"} src={Building} alt="Building"/>
                        <div style={{margin: "50px"}}>
                            <a target={"_blank"} href="https://forms.gle/u7ULRgp12CLiNKtj7">
                                <img width={200} src={Qrcode} alt="Qrcode"/>
                                <p>Participe da pesquisa!</p>
                            </a>
                        </div>
                    </div>
                    <div className={"container-pulsante"}>
                        <h3 className={"texto-pulsante"}>Site em construção...</h3>
                    </div>
                </div>
                <div>
                    <div className={"hover-container"}>
                        <h2><span className={"hover-text"}>「ByteAcademy」</span></h2>
                        <img src={lain} alt="lain dancing" className="hover-image"/>
                    </div>
                    <p>Aplicativo Educacional Gamificado</p>
                    <button onClick={goTo} className={"visited"}>Visite o meu site</button>
                </div>
            </div>
        </>
    )
}
