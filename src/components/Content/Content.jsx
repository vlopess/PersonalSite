import {Card} from "../Card/Card.jsx";
import "./Content.css"
import Lottie from "lottie-react";
import animationData from '../../assets/lotties/animation_logo.json';
import {Sliding} from "../Sliding/Sliding.jsx";

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
                <section style={{height: "100vh", marginTop: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
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
                        <p>Victor Lopes</p>
                    </div>
                    <div className={"m2"}>
                        <Lottie loop={true} animationData={animationData}/>
                    </div>
                </section>
                <section style={{height: "100vh", width: "100%", gap: "1.5rem"}}>
                    <div style={{"display": "flex", gap: "inherit"}}>
                        <Card/>
                        <Card/>
                    </div>
                    <Sliding/>
                </section>
                <section style={{margin: "25px 0", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <Card height={500}></Card>
                        <div></div>
                        <Card height={100}></Card>
                    </div>
                </section>
            </div>
        </>
    )
}