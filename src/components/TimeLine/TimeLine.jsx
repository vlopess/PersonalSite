import { useRef, useEffect } from "react"
import { Briefcase, GraduationCap, Certificate, CalendarBlank } from "@phosphor-icons/react"
import Translator from "../../i18n/Translator.js"
import "./TimeLine.css";

const MILESTONES = [
  {
    type: "college",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "IFBA",
    date: "Março 2026",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Desenvolvedor",
    company: "Horizon – Inovação e Tecnologia",
    date: "Junho 2025",
    icon: Briefcase,
  },
  {
    type: "certificate",
    title: "Introdução a Teste de Software",
    company: "UFBA",
    date: "Dezembro 2024",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Formação Spring Boot 3",
    company: "Alura",
    date: "Abril 2024",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "The Complete Spring Boot Development Bootcamp",
    company: "Udemy",
    date: "Março 2024",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Java encontra Scrum: Desenvolvendo software com Agilidade",
    company: "UFBA",
    date: "Agosto 2023",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Desenvolvimento de Aplicativos Móveis",
    company: "UFBA",
    date: "Julho 2023",
    desc: "Curso de desenvolvimento mobile",
    icon: Certificate,
  },
  {
    type: "work",
    title: "Desenvolvedor",
    company: "Computação Brasil",
    date: "Janeiro 2023",
    desc: "Suporte e desenvolvimento de soluções",
    icon: Briefcase,
  },
  {
    type: "college",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "IFBA",
    date: "Agosto 2022",
    desc: "Início da graduação em Análise e Desenvolvimento de Sistemas",
    icon: GraduationCap,
  },
]

export const TimeLine = () => {
    const wrapRef = useRef(null)

    useEffect(() => {
        const el = wrapRef.current
        if (!el) return
        const items = el.querySelectorAll(".timeline-item")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("timeline-item--visible")
                }
            })
        }, { threshold: 0.15 })

        items.forEach((item) => observer.observe(item))
        return () => observer.disconnect()
    }, [])

    return (
        <div className="timeline-wrap" ref={wrapRef}>
            <h2 className="timeline-title"><Translator path="aboutMe.timeLine.title"/></h2>
            <div className="timeline-body">
            <div className="timeline-line" aria-hidden="true" />
            {MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0
                const Icon = m.icon
                return (
                    <div
                        key={i}
                        className={`timeline-item timeline-item--${isLeft ? "left" : "right"}`}
                    >
                        {isLeft ? (
                            <>
                                <div className="timeline-card">
                                    <div className="timeline-date-badge">
                                        <CalendarBlank size={10} />
                                        {m.date}
                                    </div>
                                    <div className="timeline-job-title">{m.title}</div>
                                    <div className="timeline-company">{m.company}</div>
                                </div>
                                <div className="timeline-node-wrap">
                                    <div className={`timeline-node timeline-node--${m.type}`} aria-hidden="true">
                                        <Icon size={16} weight="fill" />
                                    </div>
                                </div>
                                <div className="timeline-spacer" />
                            </>
                        ) : (
                            <>
                                <div className="timeline-spacer" />
                                <div className="timeline-node-wrap">
                                    <div className={`timeline-node timeline-node--${m.type}`} aria-hidden="true">
                                        <Icon size={16} weight="fill" />
                                    </div>
                                </div>
                                <div className="timeline-card">
                                    <div className="timeline-date-badge">
                                        <CalendarBlank size={10} />
                                        {m.date}
                                    </div>
                                    <div className="timeline-job-title">{m.title}</div>
                                    <div className="timeline-company">{m.company}</div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
            </div>
        </div>
    )
}
