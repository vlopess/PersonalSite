import {Card} from "../Card/Card.jsx";
import "./Content.css"
import {Sliding} from "../Sliding/Sliding.jsx";
import {MostTech} from "../MostTech/MostTech.jsx";
import {ContatosList} from "../ContatosList/ContatosList.jsx";
import {Divider} from "../Divider/Divider.jsx";
import {Article} from "../Article/Article.jsx";
import { ArrowRight } from "@phosphor-icons/react"
import {TimeLine} from "../TimeLine/TimeLine.jsx";
import Translator from "../../i18n/Translator.js";
import {useEffect, useRef, useState} from "react";
import {NavBar} from "../NavBar/NavBar.jsx";
import {Footer} from "../Footer/Footer.jsx";
import Me from "../../assets/png/me.webp";
import {ProjectCard} from "../ProjectCard/ProjectCard.jsx";
import Loop from "@/components/Loop.jsx";
import axios from "axios";
import { Services } from "../Services/Services.jsx";

export const ContentHome = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [heightCard, setHeightCard] = useState(280);
    const cardRefs = useRef({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                `https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Victorldev&minify=on`
            );
            setPosts(response.data.items);
        };
        loadPosts();
    }, []);

    useEffect(() => {
        if (!expandedId) return;
        const id = setTimeout(() => {
            cardRefs.current[expandedId]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
        return () => clearTimeout(id);
    }, [expandedId]);

    useEffect(() => {
        const handleResize = () => {
            setHeightCard(window.innerWidth < 992 ? 350 : 280);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <NavBar/>
            <div className="page-section">
                {/* Hero */}
                <section className="hero" id="content-home">
                    <div className="hero-glow" aria-hidden="true" />
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span><Translator path="home.hello"/></span><br/><Translator path="home.whoIam"/><Loop /><Translator path="home.dev"/>
                        </h1>
                        <p className="hero-subtitle">Victor Lopes | <Translator path="home.dev"/> Full-Stack</p>
                    </div>
                    <div className="hero-image-wrapper hide-mobile">
                        <img className="hero-image" src={Me} alt="Victor Lopes illustration"/>
                    </div>
                </section>

                {/* About */}
                <section id="content-aboutme" style={{width: "100%"}}>
                    <Divider text={<Translator path="divider.aboutMe"/>}/>
                    <div className="bio-me">
                        <Card height={heightCard}>
                            <div>
                                <h2 className="card-title"><Translator path="aboutMe.bio.title"/></h2>
                                <p className="card-text">
                                    <Translator path="aboutMe.bio.text"/>
                                    <a target="_blank" rel="noopener noreferrer" href={"resumes/" + Translator({ path: "aboutMe.bio.cv_language" })}><Translator path="aboutMe.bio.cv"/></a>
                                </p>
                            </div>
                        </Card>
                        <Card height={heightCard}>
                            <div>
                                <h2 className="card-title"><Translator path="aboutMe.article.title"/></h2>
                                <div className="medium-posts">
                                    {posts.length > 0 && (
                                        <Article featured={true} thumbnail={posts[0].thumbnail} text={posts[0].title} link={posts[0].link}/>
                                    )}
                                    {posts.slice(1, 4).map((post) => (
                                        <Article key={post.link} text={post.title} link={post.link}/>
                                    ))}
                                    <Article icon={ArrowRight} more text={<Translator path="aboutMe.article.more"/>} link={"https://medium.com/@Victorldev"}/>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="bio-me">
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

                {/* Projects */}
                <section id="content-projects" style={{width: "100%"}}>
                    <Divider text={<Translator path="divider.projetos"/>}/>
                    <div className="projects-scroll">
                        <div className="projects-grid">
                            <ProjectCard
                                logoProject={'https://ph-files.imgix.net/43ccd2ca-790e-4ed4-8006-e892810021cd.png?auto=compress,format&codec=mozjpeg&cs=strip&dpr=2&fit=crop&frame=1&h=64&w=64'}
                                cardRef={(el) => (cardRefs.current["JaroslavaID"] = el)}
                                key={"JaroslavaID"}
                                project={"Jaroslava"}
                                tags={['Web Application', 'Dev Tool']}
                                thumbnailColor={'#00E054'}
                                expanded={expandedId === "JaroslavaID"}
                                hidden={expandedId !== null && expandedId !== "JaroslavaID"}
                                onExpand={() => setExpandedId("JaroslavaID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/Jaroslava.sdk'}
                                viewUrl={'https://jaroslava.app/'}
                                icons={['css', 'html', 'js', 'ts']}
                                slideImgUrl={['https://ph-files.imgix.net/18542582-e935-4c48-974e-7bb819a6c655.png?auto=compress,format&codec=mozjpeg&cs=strip&dpr=2&fit=max&frame=1&h=320&w=612', "https://ph-files.imgix.net/43686ae4-e774-4755-b4a6-7d7becfdda35.png?auto=compress,format&codec=mozjpeg&cs=strip&dpr=2&fit=max&frame=1&h=320&w=611", "https://ph-files.imgix.net/605d4a30-735f-4670-a48f-f8345c2d33a0.png?auto=compress,format&codec=mozjpeg&cs=strip&dpr=2&fit=max&frame=1&h=320&w=611"]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/DiscoverCountry/blob/master/src/assets/logo.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["DiscoverCountryID"] = el)}
                                key={"DiscoverCountryID"}
                                project={"DiscoverCountry"}
                                tags={['Web Application', 'Game']}
                                thumbnailColor={'#00E054'}
                                expanded={expandedId === "DiscoverCountryID"}
                                hidden={expandedId !== null && expandedId !== "DiscoverCountryID"}
                                onExpand={() => setExpandedId("DiscoverCountryID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/DiscoverCountry'}
                                viewUrl={'https://discovercountry.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'express','jest', 'prisma']}
                                slideImgUrl={['https://github.com/vlopess/DiscoverCountry/blob/master/src/assets/logo.png?raw=true']}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/MovieRace/blob/master/src/assets/icon.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["MovieraceID"] = el)}
                                key={"MovieraceID"}
                                project={"Movierace"}
                                tags={['Web Application', 'Game']}
                                thumbnailColor={'#00E054'}
                                expanded={expandedId === "MovieraceID"}
                                hidden={expandedId !== null && expandedId !== "MovieraceID"}
                                onExpand={() => setExpandedId("MovieraceID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/MovieRace'}
                                viewUrl={'https://movierace.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite']}
                                slideImgUrl={[
                                    'https://ph-files.imgix.net/1569e00e-4b18-4427-8794-2b8cf29e6641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=639&h=320&fit=max&frame=1&dpr=2',
                                    'https://ph-files.imgix.net/507b29fc-f63a-4ff2-a0cd-be452e03175a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=639&h=320&fit=max&frame=1&dpr=2',
                                    'https://ph-files.imgix.net/4307b929-87b8-4e27-940c-e7764e1e7e91.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=639&h=320&fit=max&frame=1&dpr=2'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/CVCheck/blob/main/src/assets/logo.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["CVCheckID"] = el)}
                                key={"CVCheckID"}
                                project={"CVCheck"}
                                tags={['Web Application', 'Tool']}
                                thumbnailColor={'#6540E9'}
                                expanded={expandedId === "CVCheckID"}
                                hidden={expandedId !== null && expandedId !== "CVCheckID"}
                                onExpand={() => setExpandedId("CVCheckID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/CVCheck'}
                                viewUrl={'https://cvcheck.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'ai']}
                                slideImgUrl={[
                                    'https://github.com/vlopess/CVCheck/blob/main/src/assets/slide_1.png?raw=true',
                                    'https://github.com/vlopess/CVCheck/blob/main/src/assets/slide_2.png?raw=true',
                                    'https://github.com/vlopess/CVCheck/blob/main/src/assets/slide_3.png?raw=true'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/LanguageToday/blob/main/src/assets/Catharina.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["languageTodayID"] = el)}
                                key={"languageTodayID"}
                                project={"languageToday"}
                                tags={['Web Application', 'Tool', 'Education']}
                                thumbnailColor={'#F4F8FE'}
                                expanded={expandedId === "languageTodayID"}
                                hidden={expandedId !== null && expandedId !== "languageTodayID"}
                                onExpand={() => setExpandedId("languageTodayID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/LanguageToday'}
                                viewUrl={'https://languagetoday.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'ai']}
                                slideImgUrl={[
                                    'https://github.com/vlopess/LanguageToday/blob/main/src/assets/Catharina.png?raw=true',
                                    'https://github.com/vlopess/LanguageToday/blob/main/src/assets/slide1.png?raw=true',
                                    'https://github.com/vlopess/LanguageToday/blob/main/src/assets/slide2.png?raw=true',
                                    'https://github.com/vlopess/LanguageToday/blob/main/src/assets/slide3.png?raw=true'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/PixelGuess/blob/main/src/assets/icon.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["PixelguessID"] = el)}
                                key={"PixelguessID"}
                                project={"pixelguess"}
                                tags={['Web Application', 'Game']}
                                thumbnailColor={'#8A7BFF'}
                                expanded={expandedId === "pixelguessID"}
                                hidden={expandedId !== null && expandedId !== "pixelguessID"}
                                onExpand={() => setExpandedId("pixelguessID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/PixelGuess'}
                                viewUrl={'https://pixelguess.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite']}
                                slideImgUrl={[
                                    'https://images2.imgbox.com/92/03/pJEPtykc_o.jpeg'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/KristNotes/blob/main/src/assets/kristina.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["KristnotesID"] = el)}
                                key={"KristnotesID"}
                                project={"kristnotes"}
                                tags={['Web Application', 'Productivity', 'Social']}
                                thumbnailColor={'#834C26'}
                                expanded={expandedId === "KristnotesID"}
                                hidden={expandedId !== null && expandedId !== "KristnotesID"}
                                onExpand={() => setExpandedId("KristnotesID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/KristNotes'}
                                viewUrl={'https://kristnotes.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'supabase']}
                                slideImgUrl={[
                                    'https://github.com/user-attachments/assets/549d6e93-bbc6-4118-855b-8a6ce7298efe',
                                    'https://github.com/user-attachments/assets/2e0242f0-6247-4ed7-985b-ca2c3c0fac73',
                                    'https://github.com/user-attachments/assets/c2e5720b-751c-408c-b7b2-483a1a8882ca',
                                    'https://github.com/user-attachments/assets/b3a8cf82-63df-480f-9d5f-c20dc619b151',
                                    'https://github.com/user-attachments/assets/90f564a1-e8e9-4916-bb48-ba4adb8696bf'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://raw.githubusercontent.com/vlopess/hub.nullacademy/refs/heads/main/src/assets/png/Frame%2030(2).png'}
                                cardRef={(el) => (cardRefs.current["NullAcademyHubID"] = el)}
                                key={"NullAcademyHubID"}
                                project={"nullAcademyHub"}
                                tags={['Web Application', 'Education', 'Information']}
                                thumbnailColor={'#FCF2E1'}
                                expanded={expandedId === "NullAcademyHubID"}
                                hidden={expandedId !== null && expandedId !== "NullAcademyHubID"}
                                onExpand={() => setExpandedId("NullAcademyHubID")}
                                onClose={() => setExpandedId(null)}
                                viewUrl={'https://nullacademyhub.netlify.app'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'dart', 'flutter']}
                                slideImgUrl={[
                                    'https://raw.githubusercontent.com/vlopess/hub.nullacademy/refs/heads/main/src/assets/png/Frame%2030(2).png'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/Goth4Goth/blob/main/goth4goth/src/assets/images/bat.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["Goth4GothID"] = el)}
                                key={"Goth4GothID"}
                                project={"Goth4Goth"}
                                tags={['Web Application', 'Chat Application', 'Social']}
                                thumbnailColor={'#343541'}
                                expanded={expandedId === "Goth4GothID"}
                                hidden={expandedId !== null && expandedId !== "Goth4GothID"}
                                onExpand={() => setExpandedId("Goth4GothID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/Goth4Goth'}
                                viewUrl={'https://fastidious-dolphin-7ed490.netlify.app/goth4goth'}
                                icons={['css', 'html', 'js', 'react', 'vite', 'firebase']}
                                slideImgUrl={[
                                    'https://github.com/user-attachments/assets/c74b09b5-ed2a-496f-883b-bc0879426562',
                                    'https://github.com/user-attachments/assets/b2e8d996-b4b3-418f-8759-8989dfc03fb0',
                                    'https://github.com/user-attachments/assets/3576b334-e66d-4cf0-a018-6440ebf27812',
                                    'https://github.com/user-attachments/assets/a9bc0754-b6b3-42d6-8bc5-3cfb712c4049'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/Your-Taste-Around-The-World/blob/master/src/assets/globe.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["YourTasteAroundTheWorldID"] = el)}
                                key={"YourTasteAroundTheWorldID"}
                                project={"YourTaste"}
                                tags={['Web Application', 'Education']}
                                thumbnailColor={'#05B437'}
                                expanded={expandedId === "YourTasteAroundTheWorldID"}
                                hidden={expandedId !== null && expandedId !== "YourTasteAroundTheWorldID"}
                                onExpand={() => setExpandedId("YourTasteAroundTheWorldID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/Your-Taste-Around-The-World'}
                                viewUrl={'https://vlopess.github.io/Your-Taste-Around-The-World'}
                                icons={['css', 'html', 'js', 'react', 'vite']}
                                slideImgUrl={[
                                    'https://github.com/user-attachments/assets/cd58c05d-cca1-44c7-b6b7-95cb789c3212',
                                    'https://github.com/user-attachments/assets/d20feb44-4089-4dbb-9882-d05ab076b931',
                                    'https://github.com/user-attachments/assets/46ba33cf-3294-498c-a5be-6b68755dd5fe'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://skillicons.dev/icons?i=vim'}
                                cardRef={(el) => (cardRefs.current["VimTutorialID"] = el)}
                                key={"VimTutorialID"}
                                project={"VimTutorial"}
                                tags={['Web Application', 'Education']}
                                thumbnailColor={'#05B437'}
                                expanded={expandedId === "VimTutorialID"}
                                hidden={expandedId !== null && expandedId !== "VimTutorialID"}
                                onExpand={() => setExpandedId("VimTutorialID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/VimTutorial'}
                                viewUrl={'https://vlopess.github.io/VimTutorial'}
                                icons={['css', 'html', 'js', 'react', 'vite']}
                                slideImgUrl={[
                                    'https://github.com/user-attachments/assets/abb08c97-22ca-41d8-b135-02caa1cdcd42',
                                    'https://github.com/user-attachments/assets/04275731-442a-484f-8389-c267c1c23f15',
                                    'https://github.com/user-attachments/assets/c0a4823d-b2b-48d4-8315-9a112b01a4a4'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/MyMusicTaste/blob/master/assets/png/logo.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["MyMusicTasteID"] = el)}
                                key={"MyMusicTasteID"}
                                project={"MyMusicTaste"}
                                tags={['Mobile Application', 'Data Visualisation']}
                                thumbnailColor={'#5B191B'}
                                expanded={expandedId === "MyMusicTasteID"}
                                hidden={expandedId !== null && expandedId !== "MyMusicTasteID"}
                                onExpand={() => setExpandedId("MyMusicTasteID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/MyMusicTaste'}
                                icons={['dart', 'flutter', 'firebase']}
                                slideImgUrl={[
                                    'https://github.com/user-attachments/assets/b1fed1ba-ae6e-4456-a3a9-db2ba0c7ec4a',
                                    'https://github.com/user-attachments/assets/673dfca3-84ad-4ebb-8e06-ab5eb3a9de91',
                                    'https://github.com/user-attachments/assets/179a6579-8e4b-4169-ab52-cd26c1c8174a'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://raw.githubusercontent.com/vlopess/OlymFollow-FrontEnd/refs/heads/main/olymfollow-front/src/assets/LogoOlympicsFollow.png'}
                                cardRef={(el) => (cardRefs.current["OlympicsID"] = el)}
                                key={"OlympicsID"}
                                project={"Olympics"}
                                tags={['Web Application']}
                                thumbnailColor={'#FFCD5C'}
                                expanded={expandedId === "OlympicsID"}
                                hidden={expandedId !== null && expandedId !== "OlympicsID"}
                                onExpand={() => setExpandedId("OlympicsID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/OlymFollow-FrontEnd'}
                                icons={['css', 'html', 'js', 'react', 'idea', 'java', 'spring', 'rabbitmq', 'eclipse', 'postgres']}
                                slideImgUrl={[
                                    'https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/login.png?raw=',
                                    'https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/cadastro.png?raw=true',
                                    'https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/landing1.png?raw=',
                                    'https://github.com/vlopess/OlymFollow-FrontEnd/blob/main/olymfollow-front/src/assets/screenshots/landing2.png?raw='
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://raw.githubusercontent.com/vlopess/LeChat/refs/heads/master/images/logo.png'}
                                cardRef={(el) => (cardRefs.current["LeChatID"] = el)}
                                key={"LeChatID"}
                                project={"LeChat"}
                                tags={['Mobile Application', 'Chat Application']}
                                thumbnailColor={'#154262'}
                                expanded={expandedId === "LeChatID"}
                                hidden={expandedId !== null && expandedId !== "LeChatID"}
                                onExpand={() => setExpandedId("LeChatID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/LeChat'}
                                icons={['dart', 'flutter', 'firebase']}
                                slideImgUrl={[
                                    'https://raw.githubusercontent.com/vlopess/LeChat/refs/heads/master/images/logo.png',
                                    'https://github.com/user-attachments/assets/c4bbc72e-29bd-4030-8de9-f58734bca70e',
                                    'https://github.com/user-attachments/assets/2886ea94-2f6b-405f-92fa-142ff775c6e5',
                                    'https://github.com/user-attachments/assets/bd1d9950-fba5-4cb6-82ac-e6f508dc396d'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/Sudoku/blob/main/src/images/logo2.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["SudokuID"] = el)}
                                key={"SudokuID"}
                                project={"Sudoku"}
                                tags={['Desktop Application', 'Game']}
                                thumbnailColor={'#222222'}
                                expanded={expandedId === "SudokuID"}
                                hidden={expandedId !== null && expandedId !== "SudokuID"}
                                onExpand={() => setExpandedId("SudokuID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/Sudoku'}
                                icons={['java']}
                                slideImgUrl={[
                                    'https://raw.githubusercontent.com/sergiocerq/Sudoku/refs/heads/main/image1.png',
                                    'https://github.com/sergiocerq/Sudoku/blob/main/image2.png?raw=true',
                                    'https://github.com/sergiocerq/Sudoku/blob/main/image3.png?raw=true',
                                    'https://github.com/sergiocerq/Sudoku/blob/main/image4.png?raw=true'
                                ]}
                            />
                            <ProjectCard
                                logoProject={'https://github.com/vlopess/SimilarTaste/blob/main/image/favicon-16x16.png?raw=true'}
                                cardRef={(el) => (cardRefs.current["SimilarTasteID"] = el)}
                                key={"SimilarTasteID"}
                                project={"SimilarTaste"}
                                tags={['Web Application']}
                                thumbnailColor={'#471F7A'}
                                expanded={expandedId === "SimilarTasteID"}
                                hidden={expandedId !== null && expandedId !== "SimilarTasteID"}
                                onExpand={() => setExpandedId("SimilarTasteID")}
                                onClose={() => setExpandedId(null)}
                                githubUrl={'https://github.com/vlopess/SimilarTaste'}
                                viewUrl={'https://vlopess.github.io/SimilarTaste'}
                                icons={['css', 'html', 'js', 'jquery']}
                                slideImgUrl={[
                                    'https://github.com/vlopess/SimilarTaste/raw/main/tela_1.gif?raw=true'
                                ]}
                            />
                        </div>
                    </div>
                    <Services/>
                    <Divider text={<Translator path="divider.contato"/>}/>
                    <Card height={100}>
                        <ContatosList/>
                    </Card>
                </section>
            </div>
            <Footer/>
        </>
    )
}
