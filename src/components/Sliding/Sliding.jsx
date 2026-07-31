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
    const items = TECH_ITEMS.map((t, i) => (
        <span className="tech-marquee-item" key={`${t.label}-${i}`}>
            <img src={t.src} alt="" loading="lazy" />
            <span className="tech-marquee-label">{t.label}</span>
        </span>
    ))

    return (
        <div className="tech-marquee-wrapper" aria-label="Technologies">
            {items}
        </div>
    )
}
