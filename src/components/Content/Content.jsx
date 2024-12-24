import {Card} from "../Card/Card.jsx";
import "./Content.css"
import Lottie from "lottie-react";
import animationData from '../../assets/lotties/animation_logo.json';

export const Content = () => {

    return (
        <>
            <div style={{
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <h1>Hello!<br/>I'm a
                        <div className={"wrapper"}>
                            <span> Mobile </span>
                            <span> Front-End </span>
                            <span> Back-End </span>
                        </div>
                        <br/>
                        Developer
                    </h1>
                    <Lottie loop={true} animationData={animationData}/>
                </div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </>
    )
}