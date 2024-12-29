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
                <section id={"content-home"} style={{
                    height: "100vh",
                    marginTop: "10rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <div className="dot"></div>

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
                        <div className="dot"></div>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <h2>Bio</h2>
                                <p>
                                    Minha jornada no mundo da programação começou a um pouco mais de um ano, e desde então,
                                    tenho me dedicado a aprimorar minhas habilidades. No meu tempo livre, gosto de assistir
                                    filme. Se você quiser trocar ideias, discutir filmes ou compartilhar músicas inspiradoras,
                                    e claro, falar sobre programação, sinta-se à vontade para entrar em contato comigo!
                                </p>
                            </div>
                        </Card>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <h2>Artigos</h2>
                                <div>
                                    <p> Minha jornada no mundo da programação começou a um pouco mais de um ano, e
                                        desde</p>
                                    <p> Minha jornada no mundo da programação começou a um pouco mais de um ano, e
                                        desde</p>
                                    <p> Minha jornada no mundo da programação começou a um pouco mais de um ano, e
                                        desde</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <Divider text={"Estatítiscas"}/>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <div className="dot"></div>
                        <Card/>
                        <Card>
                            <MostTech/>
                        </Card>
                    </div>
                    <Divider text={"Ferramentas e Tecnologias"}/>
                    <Sliding/>
                </section>
                <section id={"content-projects"} style={{margin: "25px 0", width: "100%"}}>
                    <div className="dot"></div>

                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <Divider text={"Projetos"}/>

                        <Card showPoint={true} height={600}>
                            <div className="dot"></div>
                            <div style={{
                                width: "100%",
                                height: "100%",
                                overflow: "scroll"
                            }}>
                                <DropDownProjects
                                    title={"Goth4Goth: chat em tempo real criado para a comunidade gótica e alternativa"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"Your Taste Around The World: site interativo que permite aos usuários descobrir a origem dos artistas que eles mais escutam"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"Vim Tutorial: tutorial interativo e completo sobre o editor de texto Vim."}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"MyMusicTaste: App de collage de música"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"Olympics Follow: Sistema de Visualização do Quadro de Medalhas das Olimpíadas"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"LeChat: aplicação mobile para criação de grupos de conversas."}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"Sudoku em Java"}>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                    <p>Texto Teste</p>
                                </DropDownProjects>
                                <DropDownProjects
                                    title={"Similiar Taste: projeto que permite aos usuários descobrir músicas e artistas semelhantes com base em suas preferências musicais."}>
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