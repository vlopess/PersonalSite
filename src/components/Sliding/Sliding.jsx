import { useEffect, useState } from "react"
import { Pause, Play } from "@phosphor-icons/react"
import { useTranslation } from "react-i18next"
import "./Sliding.css";

const TECH_ITEMS = [
  { src: "https://skillicons.dev/icons?i=spring", label: "Spring Boot" },
  { src: "https://skillicons.dev/icons?i=java", label: "Java" },
  { src: "https://skillicons.dev/icons?i=idea", label: "IntelliJ" },
  { src: "https://skillicons.dev/icons?i=eclipse", label: "Eclipse" },
  { src: "https://skillicons.dev/icons?i=rabbitmq", label: "RabbitMQ" },
  { src: "https://skillicons.dev/icons?i=flutter", label: "Flutter" },
  { src: "https://skillicons.dev/icons?i=dart", label: "Dart" },
  { src: "https://skillicons.dev/icons?i=firebase", label: "Firebase" },
  { src: "https://skillicons.dev/icons?i=cs", label: "C#" },
  { src: "https://skillicons.dev/icons?i=dotnet", label: ".NET" },
  { src: "https://skillicons.dev/icons?i=visualstudio", label: "VS" },
  { src: "https://skillicons.dev/icons?i=py", label: "Python" },
  { src: "https://skillicons.dev/icons?i=flask", label: "Flask" },
  { src: "https://skillicons.dev/icons?i=opencv", label: "OpenCV" },
  { src: "https://skillicons.dev/icons?i=selenium", label: "Selenium" },
  { src: "https://skillicons.dev/icons?i=react", label: "React" },
  { src: "https://skillicons.dev/icons?i=angular", label: "Angular" },
  { src: "https://skillicons.dev/icons?i=js", label: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=ts", label: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=html", label: "HTML" },
  { src: "https://skillicons.dev/icons?i=css", label: "CSS" },
  { src: "https://skillicons.dev/icons?i=jquery", label: "jQuery" },
  { src: "https://skillicons.dev/icons?i=supabase", label: "Supabase" },
  { src: "https://skillicons.dev/icons?i=androidstudio", label: "Android Studio" },
  { src: "https://skillicons.dev/icons?i=postgres", label: "PostgreSQL" },
  { src: "https://skillicons.dev/icons?i=vim", label: "Vim" },
  { src: "https://skillicons.dev/icons?i=linux", label: "Linux" },
  { src: "https://skillicons.dev/icons?i=ubuntu", label: "Ubuntu" },
  { src: "https://skillicons.dev/icons?i=figma", label: "Figma" },
  { src: "https://skillicons.dev/icons?i=vscode", label: "VS Code" },
  { src: "https://skillicons.dev/icons?i=git", label: "Git" },
  { src: "https://skillicons.dev/icons?i=arch", label: "Arch" },
  { src: "https://skillicons.dev/icons?i=deno", label: "Deno" },
  { src: "https://skillicons.dev/icons?i=obsidian", label: "Obsidian" },
  { src: "https://skillicons.dev/icons?i=netlify", label: "Netlify" },
]

export const Sliding = () => {
    const { t } = useTranslation()
    const [reducedMotion, setReducedMotion] = useState(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
    const [playback, setPlayback] = useState(null)
    const playing = playback ?? !reducedMotion

    useEffect(() => {
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
        const updatePreference = (event) => setReducedMotion(event.matches)

        preference.addEventListener("change", updatePreference)
        return () => preference.removeEventListener("change", updatePreference)
    }, [])

    const playbackLabel = t(playing ? "carousel.pause" : "carousel.play")

    return (
        <div className="tech-marquee-wrapper" role="region" aria-label={t("divider.tech")}>
            <div className="tech-marquee-viewport" data-playing={playing} tabIndex={playing ? undefined : 0}>
                <div className="tech-marquee-track">
                    {[false, true].map((duplicate) => (
                        <div className="tech-marquee-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
                            {TECH_ITEMS.map(({ src, label }) => (
                                <span className="tech-marquee-item" key={label}>
                                    <img src={src} alt="" loading="lazy" />
                                    <span className="tech-marquee-label">{label}</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button
                type="button"
                className="tech-marquee-toggle"
                onClick={() => setPlayback(!playing)}
                aria-label={playbackLabel}
                title={playbackLabel}
            >
                {playing ? <Pause size={16} weight="fill" aria-hidden="true" /> : <Play size={16} weight="fill" aria-hidden="true" />}
            </button>
        </div>
    )
}
