import { useTranslation } from "react-i18next"
import { useRef, useEffect } from "react"
import { Briefcase, GraduationCap, Certificate, CalendarBlank } from "@phosphor-icons/react"
import Translator from "../../i18n/Translator.js"
import "./TimeLine.css";

const MILESTONES = [
  {
    type: "work",
    title: "Desenvolvedor",
    titleKey: "developer",
    company: "Open System Tecnologia",
    date: "2026-09-01",
    icon: Briefcase,
  },
  {
    type: "college",
    title: "Análise e Desenvolvimento de Sistemas",
    titleKey: "systems",
    company: "IFBA",
    date: "2026-03-01",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Desenvolvedor",
    titleKey: "developer",
    company: "Horizon – Inovação e Tecnologia",
    date: "2025-06-01",
    icon: Briefcase,
  },
  {
    type: "certificate",
    title: "Introdução a Teste de Software",
    titleKey: "testing",
    company: "UFBA",
    date: "2024-12-01",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Formação Spring Boot 3",
    titleKey: "springBoot",
    company: "Alura",
    date: "2024-04-01",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "The Complete Spring Boot Development Bootcamp",
    company: "Udemy",
    date: "2024-03-01",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Java encontra Scrum: Desenvolvendo software com Agilidade",
    titleKey: "javaScrum",
    company: "UFBA",
    date: "2023-08-01",
    icon: Certificate,
  },
  {
    type: "certificate",
    title: "Desenvolvimento de Aplicativos Móveis",
    titleKey: "mobile",
    company: "UFBA",
    date: "2023-07-01",
    desc: "Curso de desenvolvimento mobile",
    icon: Certificate,
  },
  {
    type: "work",
    title: "Desenvolvedor",
    titleKey: "developer",
    company: "Computação Brasil",
    date: "2023-01-01",
    desc: "Suporte e desenvolvimento de soluções",
    icon: Briefcase,
  },
  {
    type: "college",
    title: "Análise e Desenvolvimento de Sistemas",
    titleKey: "systems",
    company: "IFBA",
    date: "2022-08-01",
    desc: "Início da graduação em Análise e Desenvolvimento de Sistemas",
    icon: GraduationCap,
  },
]

export const TimeLine = () => {
    const { t, i18n } = useTranslation()
    const dateFormatter = new Intl.DateTimeFormat(i18n.resolvedLanguage, { month: "long", year: "numeric", timeZone: "UTC" })
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
                const title = m.titleKey ? t(`aboutMe.timeLine.milestones.${m.titleKey}`, m.title) : m.title
                const date = dateFormatter.format(new Date(m.date))
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
                                        {date}
                                    </div>
                                    <div className="timeline-job-title">{title}</div>
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
                                        {date}
                                    </div>
                                    <div className="timeline-job-title">{title}</div>
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
