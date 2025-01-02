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
import Translator from "../../i18n/Translator.js";

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
                        <h1><span><Translator path="home.hello"/></span><br/><Translator path="home.whoIam"/>
                            <div className={"wrapper"}>
                                <span> Mobile </span>
                                <span> Front-End </span>
                                <span> Back-End </span>
                            </div>
                            <br/>
                            <Translator path="home.dev"/>
                        </h1>
                        <p style={{
                            fontSize: 22,
                            color: "grey"
                        }}>Victor Lopes | <Translator path="home.dev"/> Full-Stack</p>
                        <p className={"btn-shine"}><Translator path="home.welcome"/></p>
                    </div>
                    <div className={"m2"}>
                        <Lottie loop={true} animationData={animationData}/>
                    </div>
                </section>
                <section id={"content-aboutme"} style={{height: "100vh", width: "100%", gap: "1.5rem"}}>
                    <Divider text={<Translator path="divider.aboutMe"/>}/>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <h2><Translator path="aboutMe.bio.title"/></h2>
                                <p>
                                    <Translator path="aboutMe.bio.text"/>
                                </p>
                            </div>
                        </Card>
                        <Card height={275}>
                            <div style={{textAlign: "start"}}>
                                <div>
                                    <h2><Translator path="aboutMe.article.title"/></h2>
                                </div>
                                <div style={{height: "10%"}}>
                                    <Article text={"Automação de testes de software: Introdução (1/4)"} link={"#"}/>
                                    <Article text={"Automação de testes: Testes Unitários — Java e JUnit (2/4)"}
                                             link={"#"}/>
                                    <Article text={"Automação de testes: Testes de Integração — Flutter (3/4)"}
                                             link={"#"}/>
                                    <Article
                                        text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"}
                                        link={"#"}/>
                                    <div style={{margin: "30px 0 5px 0"}}>
                                        <Article svg={ArrowRight} text={"Ver Mais"}
                                                 link={"https://medium.com/@Victorldev"}/>
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
                    <Divider text={<Translator path="divider.tech"/>}/>
                    <Sliding/>
                </section>
                <section id={"content-projects"} style={{margin: "25px 0", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <Divider text={<Translator path="divider.projetos"/>}/>
                        <Card showPoint={true} height={800}>
                            <div
                                id={"content-projects-list"}
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}>
                                <DropDownProjects
                                    id={"Goth4GothID"}
                                    title={<Translator path="projeto.Goth4Goth.title"/>}>
                                    <SlideShow id={"Goth4Goth"}>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849931-c74b09b5-ed2a-496f-883b-bc0879426562.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTMxLWM3NGIwOWI1LWVkMmEtNDk2Zi04ODNiLWJjMDg3OTQyNjU2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZGNhMzc2YTFkMzZmYTI2NWI4ODkzNDQ2MzM3ZWJkM2Q2ZGRiZTZkOGU4MWJjMGE0NzMwNTg0NjRjZTMyMjI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ImOw7ZcV_2h7oXBA_iPmr_a-hn92zZolPdVS1ePNPDU"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849941-b2e8d996-b4b3-418f-8759-8989dfc03fb0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTQxLWIyZThkOTk2LWI0YjMtNDE4Zi04NzU5LTg5ODlkZmMwM2ZiMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjdjNTljYzc2ODY0NThjYWYwZmFlZjQxMjA1MGVmOGU4ODBlMDIxNDhmYTBiNWI1NjUwMmUyZGEyMmIxZTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0L_BnacwpGz3Hm-UE2kcX-R9naYJmJA1wwbfh0kdDfs"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/386849941-b2e8d996-b4b3-418f-8759-8989dfc03fb0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODQ5OTQxLWIyZThkOTk2LWI0YjMtNDE4Zi04NzU5LTg5ODlkZmMwM2ZiMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjdjNTljYzc2ODY0NThjYWYwZmFlZjQxMjA1MGVmOGU4ODBlMDIxNDhmYTBiNWI1NjUwMmUyZGEyMmIxZTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0L_BnacwpGz3Hm-UE2kcX-R9naYJmJA1wwbfh0kdDfs"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/386850121-a9bc0754-b6b3-42d6-8bc5-3cfb712c4049.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2OTEwMTcsIm5iZiI6MTczNTY5MDcxNywicGF0aCI6Ii8xMjEyNjY5MjcvMzg2ODUwMTIxLWE5YmMwNzU0LWI2YjMtNDJkNi04YmM1LTNjZmI3MTJjNDA0OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMVQwMDE4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYzI2NWJhNDUwNDBiNTRhZTIyYmRmMTVhM2U2MmNlODRhMTc5NmE5MzVmNTA4OTdhZGUxNmI1ODcxMjhhN2JlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.n3byB2Tce_Hr9K9qUWOk7NW80fE9iRTu3qOGUYzTq5I"}/>
                                    </SlideShow>
                                    <p>
                                        Eu sou blablabla blablabla
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
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=firebase"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/Goth4Goth"}/>
                                            <ButtonWeb url={"https://fastidious-dolphin-7ed490.netlify.app/goth4goth"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"YourTasteAroundTheWorldID"}
                                    title={<Translator path="projeto.YourTaste.title"/>}>
                                    <SlideShow id={"YourTasteAroundTheWorld"}>
                                        <SlideItem id={"YourTasteAroundTheWorld"}
                                                   imgUrl={"https://github.com/user-attachments/assets/cd58c05d-cca1-44c7-b6b7-95cb789c3212"}/>
                                        <SlideItem id={"YourTasteAroundTheWorld"}
                                                   imgUrl={"https://github.com/user-attachments/assets/d20feb44-4089-4dbb-9882-d05ab076b931"}/>
                                        <SlideItem id={"YourTasteAroundTheWorld"}
                                                   imgUrl={"https://github.com/user-attachments/assets/46ba33cf-3294-498c-a5be-6b68755dd5fe"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.YourTaste.text"/>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=vite"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub
                                                url={"https://github.com/vlopess/Your-Taste-Around-The-World"}/>
                                            <ButtonWeb url={"https://vlopess.github.io/Your-Taste-Around-The-World/"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"VimTutorialID"}
                                    title={<Translator path="projeto.VimTutorial.title"/>}>
                                    <SlideShow id={"VimTutorial"}>
                                        <SlideItem id={"VimTutorial"}
                                                   imgUrl={"https://github.com/user-attachments/assets/abb08c97-22ca-41d8-b135-02caa1cdcd42"}/>
                                        <SlideItem id={"VimTutorial"}
                                                   imgUrl={"https://github.com/user-attachments/assets/04275731-442a-484f-8389-c267c1c23f15"}/>
                                        <SlideItem id={"VimTutorial"}
                                                   imgUrl={"https://github.com/user-attachments/assets/c0a4823d-bd2b-4d48-8315-9a112b01a4a4"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.VimTutorial.text"/>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=vite"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=js"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/VimTutorial"}/>
                                            <ButtonWeb url={"https://vlopess.github.io/VimTutorial/"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"MyMusicTasteID"}
                                    title={<Translator path="projeto.MyMusicTaste.title"/>}>
                                    <SlideShow id={"MyMusicTaste"}>
                                        <SlideItem id={"MyMusicTaste"}
                                                   videoUrl={"https://github.com/user-attachments/assets/b1fed1ba-ae6e-4456-a3a9-db2ba0c7ec4a"}/>
                                        <SlideItem id={"MyMusicTaste"}
                                                   imgUrl={"https://github.com/user-attachments/assets/673dfca3-84ad-4ebb-8e06-ab5eb3a9de91"}/>
                                        <SlideItem id={"MyMusicTaste"}
                                                   imgUrl={"https://github.com/user-attachments/assets/179a6579-8e4b-4169-ab52-cd26c1c8174a"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.MyMusicTaste.text"/>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=dart"/>
                                            <img src="https://skillicons.dev/icons?i=flutter"/>
                                            <img src="https://skillicons.dev/icons?i=firebase"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/MyMusicTaste"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"OlympicsFollowID"}
                                    title={<Translator path="projeto.Olympics.title"/>}>
                                    <SlideShow id={"OlympicsFollow"}>
                                        <SlideItem id={"OlympicsFollow"}
                                                   imgUrl={"https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/login.png?raw=true"}/>
                                        <SlideItem id={"OlympicsFollow"}
                                                   imgUrl={"https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/cadastro.png?raw=true"}/>
                                        <SlideItem id={"OlympicsFollow"}
                                                   imgUrl={"https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/landing1.png?raw=true"}/>
                                        <SlideItem id={"OlympicsFollow"}
                                                   imgUrl={"https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/landing2.png?raw=true"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.Olympics.text"/>
                                        <a target={"_blank"} href="https://github.com/sergiocerq"> serjão do react.</a>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                            <img src="https://skillicons.dev/icons?i=js"/>
                                            <img src="https://skillicons.dev/icons?i=idea"/>
                                            <img src="https://skillicons.dev/icons?i=java"/>
                                            <img src="https://skillicons.dev/icons?i=spring"/>
                                            <img src="https://skillicons.dev/icons?i=rabbitmq"/>
                                            <img src="https://skillicons.dev/icons?i=eclipse"/>
                                            <img src="https://skillicons.dev/icons?i=postgres"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/OlymFollow-FrontEnd"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"LeChatID"}
                                    title={<Translator path="projeto.LeChat.title"/>}>
                                    <SlideShow id={"LeChat"}>
                                        <SlideItem id={"LeChat"}
                                                   imgUrl={"https://github.com/user-attachments/assets/680ca804-9733-4555-9860-0f864e2f75e4"}/>
                                        <SlideItem id={"LeChat"}
                                                   imgUrl={"https://github.com/user-attachments/assets/c4bbc72e-29bd-4030-8de9-f58734bca70e"}/>
                                        <SlideItem id={"LeChat"}
                                                   imgUrl={"https://github.com/user-attachments/assets/2886ea94-2f6b-405f-92fa-142ff775c6e5"}/>
                                        <SlideItem id={"LeChat"}
                                                   imgUrl={"https://github.com/user-attachments/assets/bd1d9950-fba5-4cb6-82ac-e6f508dc396d"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.LeChat.text"/> <a
                                        href="https://github.com/vlopess/LeChat-in-Java"> terminal com Java</a>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=dart"/>
                                            <img src="https://skillicons.dev/icons?i=flutter"/>
                                            <img src="https://skillicons.dev/icons?i=firebase"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/LeChat"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"SudokuID"}
                                    title={<Translator path="projeto.Sudoku.title"/>}>
                                    <SlideShow id={"Sudoku"}>
                                        <SlideItem id={"Sudoku"}
                                                   imgUrl={"https://raw.githubusercontent.com/sergiocerq/Sudoku/refs/heads/main/image1.png"}/>
                                        <SlideItem id={"Sudoku"}
                                                   imgUrl={"https://github.com/sergiocerq/Sudoku/blob/main/image2.png?raw=true"}/>
                                        <SlideItem id={"Sudoku"}
                                                   imgUrl={"https://github.com/sergiocerq/Sudoku/blob/main/image3.png?raw=true"}/>
                                        <SlideItem id={"Sudoku"}
                                                   imgUrl={"https://github.com/sergiocerq/Sudoku/blob/main/image4.png?raw=true"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.Sudoku.text"/><a target={"_blank"}
                                                                href="https://github.com/sergiocerq"> sérgio
                                        cerqueira.</a>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=java"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/Sudoku"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"SimiliarTasteID"}
                                    title={<Translator path="projeto.SimilarTaste.title"/>}>
                                    <SlideShow id={"SimiliarTaste"}>
                                        <SlideItem id={"SimiliarTaste"}
                                                   imgUrl={"https://github.com/vlopess/SimilarTaste/raw/main/tela_1.gif?raw=true"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.SimilarTaste.text"/>
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=js"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=jquery"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonGithub url={"https://github.com/vlopess/SimilarTaste"}/>
                                            <ButtonWeb url={"https://vlopess.github.io/SimilarTaste/"}/>

                                        </div>
                                    </div>
                                </DropDownProjects>
                            </div>
                        </Card>
                        <Divider text={<Translator path="divider.contato"/>}/>
                        <Card id={"content-contacts"} height={100}>
                            <ContatosList/>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}