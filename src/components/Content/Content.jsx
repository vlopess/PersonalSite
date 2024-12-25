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
                alignItems: "center",
                gap: "1.5rem"
            }}>
                <div style={{height: "100vh",margin: "35px",display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <div style={{textAlign: "start"}}>
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
                </div>
                <div style={{display: "flex"}}>
                    <Card ></Card>
                    <Card ></Card>
                </div>
                <Sliding/>
                <Card height={500}></Card>
                <Card height={100}></Card>
            </div>
        </>
    )
}