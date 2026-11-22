import { useEffect, useRef, useState } from "react"
import Translator from "../../i18n/Translator.js"
import { Divider } from "../Divider/Divider.jsx"
import { ProjectCard } from "../ProjectCard/ProjectCard.jsx"
import { projects } from "./projects.js"
import "./Projects.css"

export const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null)
    const expandedCard = useRef(null)

    useEffect(() => {
        if (!expandedProject) return

        const id = setTimeout(() => {
            expandedCard.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
        }, 50)

        return () => clearTimeout(id)
    }, [expandedProject])

    return (
        <section id="content-projects">
            <Divider text={<Translator path="divider.projetos"/>}/>
            <div className="projects-scroll">
                <div className="projects-grid">
                    {projects.map((project) => {
                        const expanded = expandedProject === project.project

                        return (
                            <ProjectCard
                                key={project.project}
                                {...project}
                                cardRef={expanded ? expandedCard : undefined}
                                expanded={expanded}
                                hidden={expandedProject !== null && !expanded}
                                onExpand={() => setExpandedProject(project.project)}
                                onClose={() => setExpandedProject(null)}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
