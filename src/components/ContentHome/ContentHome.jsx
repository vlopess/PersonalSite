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
import {useEffect, useState} from "react";
import {NavBar} from "../NavBar/NavBar.jsx";
import {Footer} from "../Footer/Footer.jsx";

export const ContentHome = () => {
    const [heightCard, setHeightCard] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 992) {
                setHeightCard(350);
            } else {
                setHeightCard(280);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <NavBar/>
            <div style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "1000px",
                alignItems: "center",
                gap: "1.5rem"
            }}>
                <div className="background-pulse hide-md">
                    <div className="light"></div>
                    <div className="light"></div>
                    <div className="light"></div>
                    <div className="light"></div>
                </div>
                <section className={"home"} id={"content-home"} style={{
                    height: "100vh",
                    marginTop: "10rem",
                    display: "flex",
                    justifyContent: "space-around",
                }}>
                    <div style={{textAlign: "start"}}>
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
                            color: "grey"
                        }}>Victor Lopes | <Translator path="home.dev"/> Full-Stack</p>
                        <p className={"btn-shine"}><Translator path="home.welcome"/></p>
                    </div>
                    <div className={"m2"}>
                        <Lottie loop={true} animationData={animationData}/>
                    </div>
                </section>
                <div
                    style={{
                        height: "350px",
                        top: "150%",
                        left: "-3%"
                    }}
                    className="light hide-md">
                </div>
                <div
                    style={{
                        height: "350px",
                        top: "150%",
                        right: "-3%"
                    }}
                    className="light hide-md">
                </div>
                <section id={"content-aboutme"} style={{width: "100%", gap: "1.5rem"}}>
                    <Divider text={<Translator path="divider.aboutMe"/>}/>
                    <div className={"bio-me"} style={{gap: "inherit"}}>
                        <Card height={heightCard}>
                            <div style={{textAlign: "start"}}>
                                <h2><Translator path="aboutMe.bio.title"/></h2>
                                <p>
                                    <Translator path="aboutMe.bio.text"/>
                                    <a target={"_blank"} href={"resumes/" + Translator({ path: "aboutMe.bio.cv_language" })}><Translator path="aboutMe.bio.cv"/></a>
                                </p>
                            </div>
                        </Card>
                        <Card height={heightCard}>
                            <div style={{textAlign: "start"}}>
                                <div>
                                    <h2><Translator path="aboutMe.article.title"/></h2>
                                </div>
                                <div style={{height: "10%"}}>
                                    <Article text={"Native State Management in Flutter"}
                                             link={"https://medium.com/@Victorldev/native-state-management-in-flutter-b44ca610f0df"}/>
                                    <Article
                                        text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"}
                                        link={"https://medium.com/@Victorldev/automa%C3%A7%C3%A3o-de-testes-testes-de-interface-do-usu%C3%A1rio-ui-python-pytest-e-selenium-4-4-92a56744cfe5"}/>
                                    <Article text={"Automação de testes: Testes de Integração — Flutter (3/4)"}
                                             link={"https://medium.com/@Victorldev/automa%C3%A7%C3%A3o-de-testes-testes-de-integra%C3%A7%C3%A3o-flutter-3-4-f093e6880cc0"}/>
                                    <Article text={"Automação de testes: Testes Unitários — Java e JUnit (2/4)"}
                                             link={"https://medium.com/@Victorldev/automa%C3%A7%C3%A3o-de-testes-testes-unit%C3%A1rios-java-e-junit-2-4-b5e6b004bd9d"}/>
                                    <div style={{margin: "30px 0 5px 0"}}>
                                        <Article svg={ArrowRight} text={<Translator path="aboutMe.article.more"/>} link={"https://medium.com/@Victorldev"}/>
                                    </div>
                                    {/*<Article text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"} link={"#"}/>*/}
                                    {/*<Article text={"Automação de testes: Testes de Interface do Usuário (UI) — Python, PyTest e Selenium (4/4)"} link={"#"}/>*/}
                                    {/*<Article text={"É possível ler um código binário em ASCII?"} link={"#"}/>*/}
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={"bio-me"} style={{gap: "inherit"}}>
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
                        <Card height={800}>
                            <div
                                id={"content-projects-list"}
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}>
                                <DropDownProjects
                                    id={"nullAcademyHubID"}
                                    title={<Translator path="projeto.nullAcademyHub.title"/>}>
                                    <SlideShow id={"nullAcademyHub"}>
                                        <SlideItem id={"nullAcademyHub"}
                                                   imgUrl={"https://raw.githubusercontent.com/vlopess/hub.nullacademy/refs/heads/main/src/assets/png/Frame%2030(2).png"}/>
                                        </SlideShow>
                                    <p>
                                        <Translator path="projeto.nullAcademyHub.text"/>
                                    </p>
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=js"/>
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                            <img src="https://skillicons.dev/icons?i=dart"/>
                                            <img src="https://skillicons.dev/icons?i=flutter"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                        <ButtonWeb url={"https://nullacademy.com.br/"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"cineArteID"}
                                    title={<Translator path="projeto.cineArte.title"/>}>
                                    <SlideShow id={"cineArte"}>
                                        <SlideItem id={"cineArte"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/428450000-42eb432f-79e6-4ec5-b9cb-7805d0659593.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMzODYzMDksIm5iZiI6MTc0MzM4NjAwOSwicGF0aCI6Ii8xMjEyNjY5MjcvNDI4NDUwMDAwLTQyZWI0MzJmLTc5ZTYtNGVjNS1iOWNiLTc4MDVkMDY1OTU5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMzMVQwMTUzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNWYzZjFlNjU5YWU4M2JmNzlhMDFlMDU3YmQ3ZTRmMTQxZDM2ZDhkYzVkMzdmOWU5Yzg0MjAyZmFhMDU3Y2IxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ydWKkPsuYbv4LhXovfjCQ7zSPuHJ03gm5NS24hVH-ik"}/>
                                        <SlideItem id={"cineArte"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/428450188-1049dd4e-dfeb-4a65-a166-5ab01d7e2e4d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMzODYzMDksIm5iZiI6MTc0MzM4NjAwOSwicGF0aCI6Ii8xMjEyNjY5MjcvNDI4NDUwMTg4LTEwNDlkZDRlLWRmZWItNGE2NS1hMTY2LTVhYjAxZDdlMmU0ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMzMVQwMTUzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NDEwNzM5NjBkNTcyNDhiY2E0NzM1MGU0MGY1MzA2ZTQ2OGE0ZGJiZWRlNDFkZjMyOTQ5YmNiODE3OGU5MTQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mWyECnjkgbXKmbaz0LziprC-sdSDOHLfXWta5lYckDY"}/>
                                        <SlideItem id={"cineArte"}
                                                   imgUrl={"https://private-user-images.githubusercontent.com/121266927/428450406-dc68beca-a44a-47b8-b215-20836ef5fd88.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMzODYzMDksIm5iZiI6MTc0MzM4NjAwOSwicGF0aCI6Ii8xMjEyNjY5MjcvNDI4NDUwNDA2LWRjNjhiZWNhLWE0NGEtNDdiOC1iMjE1LTIwODM2ZWY1ZmQ4OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMzMVQwMTUzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMWU2ZmM1ZmQ3M2Y1MGYxYWU5ZDczMzE1NDA3MTIyZDhjM2VlNzZjYWI5ZDgyODJmNjUwMjA2ZDc2NjQ1YWE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.nx6XqEg7UbvvllFvqBTAenT9mtxuDsYWUAeNEtCvv9Q"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.cineArte.text"/>
                                    </p>
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
                                        <div>
                                            <img src="https://skillicons.dev/icons?i=css"/>
                                            <img src="https://skillicons.dev/icons?i=html"/>
                                            <img src="https://skillicons.dev/icons?i=js"/>
                                            <img src="https://skillicons.dev/icons?i=react"/>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <ButtonWeb url={"https://cinearte.netlify.app/"}/>
                                        </div>
                                    </div>
                                </DropDownProjects>
                                <DropDownProjects
                                    id={"Goth4GothID"}
                                    title={<Translator path="projeto.Goth4Goth.title"/>}>
                                    <SlideShow id={"Goth4Goth"}>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://github.com/user-attachments/assets/c74b09b5-ed2a-496f-883b-bc0879426562"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://github.com/user-attachments/assets/b2e8d996-b4b3-418f-8759-8989dfc03fb0"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://github.com/user-attachments/assets/3576b334-e66d-4cf0-a018-6440ebf27812"}/>
                                        <SlideItem id={"Goth4Goth"}
                                                   imgUrl={"https://github.com/user-attachments/assets/a9bc0754-b6b3-42d6-8bc5-3cfb712c4049"}/>
                                    </SlideShow>
                                    <p>
                                        <Translator path="projeto.Goth4Goth.text"/>
                                    </p>
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                        <div>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                    <div className={"description-project"} style={{display: "flex", justifyContent: "space-between"}}>
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
                                <div>=</div>
                            </div>
                        </Card>
                        <Divider text={<Translator path="divider.contato"/>}/>
                        <Card id={"content-contacts"} height={100}>
                            <ContatosList/>
                        </Card>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
