import {Card} from "../Card/Card.jsx";
import "./Content.css"
import Lottie from "lottie-react";
import animationData from '../../assets/lotties/animation_logo.json';
import {Sliding} from "../Sliding/Sliding.jsx";
import {MostTech} from "../MostTech/MostTech.jsx";
import {ContatosList} from "../ContatosList/ContatosList.jsx";
import {Divider} from "../Divider/Divider.jsx";
import {DropDownProjects} from "../DropDownProjects/DropDownProjects.jsx";
import {Article} from "../Article/Article.jsx";
import ArrowRight from "../../assets/svg/right-arrow.svg"
import {TimeLine} from "../TimeLine/TimeLine.jsx";
import {SlideShow} from "../SlideShow/SlideShow.jsx";
import {SlideItem} from "../SlideShow/SlideItem/SlideItem.jsx";
import {ButtonGithub} from "../Button/ButtonGithub.jsx";
import {ButtonWeb} from "../Button/ButtonWeb.jsx";

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
                    <div style={{textAlign: "start", width: "50%"}}>
                        <h1>Olá!<br/>Eu sou
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
                        }}>Victor Lopes | Desenvolvedor Full-Stack</p>
                        <p className={"btn-shine"}>Bem-vindo ao meu portifólio!</p>
                    </div>
                    <div className={"m2"}>
                        <Lottie loop={true} animationData={animationData}/>
                    </div>
                </section>
                <section id={"content-aboutme"} style={{height: "100vh", width: "100%", gap: "1.5rem"}}>
                    <Divider text={"Sobre Mim"}/>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <h2>Bio</h2>
                                <p>
                                    Olá! Me chamo Victor, sou apaixonado por programação. Tenho 2 anos de
                                    experiência em desenvolvimento de software, com o foco em desenvolmento
                                    mobile. Minha jornada começou com Flutter e Python, além disso, no ambiente
                                    profissional, desenvolvo com .NET. Tenho interesse em Spring Boot e
                                    React, trabalhando em projetos pessoais. Quando não estou programando,
                                    gosto de assistir filmes.
                                </p>
                            </div>
                        </Card>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <div>
                                    <h2>Últimos Artigos</h2>
                                </div>
                                <div style={{height: "10%"}}>
                                    <Article text={"Automação de testes de software: Introdução (1/4)"} link={"#"}/>
                                    <Article text={"Automação de testes: Testes Unitários — Java e JUnit (2/4)"} link={"#"}/>
                                    <Article text={"Automação de testes: Testes de Integração — Flutter (3/4)"} link={"#"}/>
                                    <Article text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"} link={"#"}/>
                                    <div style={{margin: "30px 0 5px 0"}}>
                                        <Article svg={ArrowRight} text={"Ver Mais"} link={"https://medium.com/@Victorldev"}/>
                                    </div>
                                    {/*<Article text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"} link={"#"}/>*/}
                                    {/*<Article text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"} link={"#"}/>*/}
                                    {/*<Article text={"É possível ler um código binário em ASCII?"} link={"#"}/>*/}
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card>
                            <TimeLine/>
                        </Card>
                        <Card>
                            <MostTech/>
                        </Card>
                    </div>
                    <Divider text={"Ferramentas e Tecnologias"}/>
                    <Sliding/>
                </section>
                <section id={"content-projects"} style={{margin: "25px 0", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <Divider text={"Projetos"}/>
                        <Card showPoint={true} height={800}>
                            <div style={{
                                width: "100%",
                                height: "100%"
                            }}>
                                <DropDownProjects
                                    title={"Goth4Goth: chat em tempo real criado para a comunidade gótica e alternativa"}>
                                    <SlideShow>
                                        <SlideItem text={"Teste"} imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849931-c74b09b5-ed2a-496f-883b-bc0879426562.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTMxLWM3NGIwOWI1LWVkMmEtNDk2Zi04ODNiLWJjMDg3OTQyNjU2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZGNhMzc2YTFkMzZmYTI2NWI4ODkzNDQ2MzM3ZWJkM2Q2ZGRiZTZkOGU4MWJjMGE0NzMwNTg0NjRjZTMyMjI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ImOw7ZcV_2h7oXBA_iPmr_a-hn92zZolPdVS1ePNPDU"}/>
                                        <SlideItem text={"Teste"} imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849941-b2e8d996-b4b3-418f-8759-8989dfc03fb0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTQxLWIyZThkOTk2LWI0YjMtNDE4Zi04NzU5LTg5ODlkZmMwM2ZiMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjdjNTljYzc2ODY0NThjYWYwZmFlZjQxMjA1MGVmOGU4ODBlMDIxNDhmYTBiNWI1NjUwMmUyZGEyMmIxZTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0L_BnacwpGz3Hm-UE2kcX-R9naYJmJA1wwbfh0kdDfs"}/>
                                        <SlideItem text={"Teste"} imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849941-b2e8d996-b4b3-418f-8759-8989dfc03fb0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTQxLWIyZThkOTk2LWI0YjMtNDE4Zi04NzU5LTg5ODlkZmMwM2ZiMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjdjNTljYzc2ODY0NThjYWYwZmFlZjQxMjA1MGVmOGU4ODBlMDIxNDhmYTBiNWI1NjUwMmUyZGEyMmIxZTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0L_BnacwpGz3Hm-UE2kcX-R9naYJmJA1wwbfh0kdDfs"}/>
                                        <SlideItem text={"Teste"} imgUrl={"https://private-user-images.githubusercontent.com/121266927/386850121-a9bc0754-b6b3-42d6-8bc5-3cfb712c4049.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODUwMTIxLWE5YmMwNzU0LWI2YjMtNDJkNi04YmM1LTNjZmI3MTJjNDA0OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYzI2NWJhNDUwNDBiNTRhZTIyYmRmMTVhM2U2MmNlODRhMTc5NmE5MzVmNTA4OTdhZGUxNmI1ODcxMjhhN2JlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.n3byB2Tce_Hr9K9qUWOk7NW80fE9iRTu3qOGUYzTq5I"}/>
                                    </SlideShow>
                                    <p>
                                        Eu sou blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla
                                        Eu sou blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla
                                        Eu sou blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla
                                        Eu sou blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla
                                        Eu sou blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                        blablabla blablabla blablabla
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=java"/>
                                            <img src="https://skillicons.dev/icons?i=spring"/>
                                            <img src="https://skillicons.dev/icons?i=dart"/>
                                            <img src="https://skillicons.dev/icons?i=flutter"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                        <ButtonGithub url={""}/>
                                            <ButtonWeb url={""}/>
                                        </div>
                                    </div>
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