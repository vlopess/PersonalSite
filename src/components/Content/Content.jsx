import {Card} from "../Card/Card.jsx";
import "./Content.css"
import Lottie from "lottie-react";
import animationData from '../../assets/lotties/animation_logo.json';
import {Sliding} from "../Sliding/Sliding.jsx";
import {MostTech} from "../MostTech/MostTech.jsx";
import {ContatosList} from "../ContatosList/ContatosList.jsx";
import {Divider} from "../Divider/Divider.jsx";
import {DropDownProjects} from "../DropDownProjects/DropDownProjects.jsx";

export const Content = () => {

    return (
        <>
            <div style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "1000px",
                alignItems: "center",
                gap: "1.5rem"
            }}>
                <section id={"content-home"} style={{height: "100vh", marginTop: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <div style={{textAlign: "start", width: "50%"}}>
                        <h1>Hello!<br/>I'm a
                            <div className={"wrapper"}>
                                <span> Mobile </span>
                                <span> Front-End </span>
                                <span> Back-End </span>
                            </div>
                            <br/>
                            Developer
                        </h1>
                        <p style={{
                            fontSize: 22,
                            color: "grey"
                        }}>Victor Lopes | Desenvolvedor full-stack</p>
                    </div>
                    <div className={"m2"}>
                        <Lottie loop={true} animationData={animationData}/>
                    </div>
                </section>
                <section id={"content-aboutme"} style={{height: "100vh", width: "100%", gap: "1.5rem"}}>
                    <Divider text={"About Me"}/>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card height={275}/>
                        <Card height={275}/>
                    </div>
                    <Divider text={"Estatítiscas"}/>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card/>
                        <Card>
                            <MostTech/>
                        </Card>
                    </div>
                    <Divider text={"Tecnologias"}/>
                    <Sliding/>
                </section>
                <section id={"content-projects"} style={{margin: "25px 0", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <Divider text={"Projetos"}/>
                        <div className="dot"></div>

                        <Card showPoint={true} height={600}>
                            <div style={{
                                width: "100%",
                                height: "100%",
                                overflow: "scroll"
                            }}>
                                <DropDownProjects
                                    title={"OlymFollow: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow2: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow3: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow4: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow5: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow6: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"OlymFollow7: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                            </div>
                        </Card>
                        <Divider text={"Contato"}/>
                        <Card id={"content-contacts"} height={100}>
                            <ContatosList/>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}