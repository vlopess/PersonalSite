import { useTranslation } from "react-i18next"
import {Card} from "../Card/Card.jsx";
import "./Content.css"
import {Sliding} from "../Sliding/Sliding.jsx";
import {MostTech} from "../MostTech/MostTech.jsx";
import {Divider} from "../Divider/Divider.jsx";
import {Article} from "../Article/Article.jsx";
import { ArrowRight } from "@phosphor-icons/react"
import {TimeLine} from "../TimeLine/TimeLine.jsx";
import Translator from "../../i18n/Translator.js";
import {useEffect, useState} from "react";
import {NavBar} from "../NavBar/NavBar.jsx";
import {Footer} from "../Footer/Footer.jsx";
import Me from "../../assets/png/me.webp";
import { Projects } from "../Projects/Projects.jsx";
import { Contact } from "../Contact/Contact.jsx";
import Loop from "@/components/Loop.jsx";
import { Services } from "../Services/Services.jsx";

const resumes = import.meta.glob("../../../resumes/resume_*.pdf", { eager: true, query: "?url", import: "default" });

export const ContentHome = () => {
    const { t } = useTranslation();
    const resume = resumes[`../../../resumes/${t("aboutMe.bio.cv_language")}`];
    const [heightCard, setHeightCard] = useState(280);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const loadPosts = async () => {
            try {
                const response = await fetch("/api/medium", { signal: controller.signal });
                if (!response.ok) throw new Error(`Medium feed returned HTTP ${response.status}`);

                const { items } = await response.json();
                if (!Array.isArray(items)) throw new Error("Medium feed has no items array");

                setPosts(items.filter((item) =>
                    typeof item?.title === "string" &&
                    typeof item.url === "string" &&
                    /^https?:\/\//i.test(item.url)
                ));
            } catch (error) {
                if (!controller.signal.aborted) console.warn("Could not load Medium articles:", error);
            }
        };

        loadPosts();
        return () => controller.abort();
    }, []);

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
                        <img className="hero-image" src={Me} alt={t("home.portraitAlt", "Victor Lopes illustration")}/>
                    </div>
                </section>

                {/* About */}
                <section id="content-aboutme">
                    <Divider text={<Translator path="divider.aboutMe"/>}/>
                    <div className="bio-me">
                        <Card height={heightCard}>
                            <div>
                                <h2 className="card-title"><Translator path="aboutMe.bio.title"/></h2>
                                <p className="card-text">
                                    <Translator path="aboutMe.bio.text"/>
                                    <a target="_blank" rel="noopener noreferrer" href={resume}><Translator path="aboutMe.bio.cv"/></a>
                                </p>
                            </div>
                        </Card>
                        <Card height={heightCard}>
                            <div>
                                <h2 className="card-title"><Translator path="aboutMe.article.title"/></h2>
                                <div className="medium-posts">
                                    {posts.length > 0 && (
                                        <Article featured={true} thumbnail={posts[0].image} text={posts[0].title} link={posts[0].url}/>
                                    )}
                                    {posts.slice(1, 4).map((post) => (
                                        <Article key={post.url} text={post.title} link={post.url}/>
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

                <Projects/>
                <Services/>
                <Contact/>
            </div>
            <Footer/>
        </>
    )
}
