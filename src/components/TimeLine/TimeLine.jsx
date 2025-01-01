import "./TimeLine.css";
import {TimeLineCollege} from "./TimeLineItens/TimeLineCollege/TimeLineCollege.jsx";
import {TImeLineWork} from "./TimeLineItens/TImeLineWork/TImeLineWork.jsx";
import {TimeLineCertificate} from "./TimeLineItens/TimeLineCertificate/TimeLineCertificate.jsx";

export const TimeLine = () => {
    return (
        <>
            <div style={{width: "100%"}}>
                <h2>Linha do Tempo</h2>
                <ul className="timeLine">
                    <TimeLineCertificate data={"2024/12 -->"} text={"Introdução a Teste de Software (UFBA)"}/>
                    <TimeLineCertificate data={"2024/03 -->"} text={"The Complete Spring Boot Development Bootcamp (Udemy)"}/>
                    <TimeLineCertificate data={"2024/04 -->"} text={"Formação Spring Boot 3 (Alura)"}/>
                    <TimeLineCertificate data={"2023/07 -->"} text={"Curso de Java encontra Scrum: Desenvolvendo software com Agilidade (UFBA)"}/>
                    <TimeLineCertificate data={"2023/08 -->"} text={"Curso de Desenvolvimento de Aplicativos Móveis (UFBA)"}/>
                    <TImeLineWork data={"2023/01 -->"}  text={"Computação Brasil"}/>
                    <TimeLineCollege data={"2022/08 -->"}  text={"Análise e Desenvolvimento de Sistemas (IFBA)"}/>
                </ul>
            </div>
        </>
    )
}