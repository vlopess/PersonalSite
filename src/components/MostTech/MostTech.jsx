import "./MostTech.css";
import Translator from "../../i18n/Translator.js";
import { DeviceMobile, Code, Cpu } from "@phosphor-icons/react"

const TECH_CATEGORIES = [
    {
        label: "Mobile",
        icon: DeviceMobile,
        items: ["Dart", "Flutter", "Android", "React + Capacitor"],
    },
    {
        label: "Front-End",
        icon: Code,
        items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite"],
    },
    {
        label: "Back-End",
        icon: Cpu,
        items: ["C#", ".NET", "Java", "Spring Boot", "Node", "Express", "Prisma", "Deno", "PostgreSQL", "Firebase", "Supabase"],
    },
]

export const MostTech = () => {
    return (
        <div className="tech-section">
            <h2 className="tech-title"><Translator path="aboutMe.habilidades.title"/></h2>
            {TECH_CATEGORIES.map((cat) => {
                const Icon = cat.icon
                return (
                    <div className="tech-category" key={cat.label}>
                        <p className="tech-category-label">
                            <Icon size={14} weight="bold" style={{ marginRight: 6, verticalAlign: "middle" }} />
                            {cat.label}
                        </p>
                        <div className="tech-chips">
                            {cat.items.map((item) => (
                                <span className="tech-chip" key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
