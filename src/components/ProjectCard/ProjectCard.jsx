import "./ProjectCard.css";
import Translator from "../../i18n/Translator.js";
import {ButtonGithub} from "../Button/ButtonGithub.jsx";
import {ButtonWeb} from "../Button/ButtonWeb.jsx";
import {SlideShow} from "../SlideShow/SlideShow.jsx";
import {SlideItem} from "../SlideShow/SlideItem/SlideItem.jsx";

export const ProjectCard = ({ tags, project, expanded, hidden, onExpand, onClose, thumbnailColor, icons, viewUrl, githubUrl, slideImgUrl, cardRef}) => {
    return (
        <div
            ref={cardRef}
            onClick={!expanded ? onExpand : undefined}
            style={{
                background: "#1c1c1a",
                borderRadius: 10,
                border: `1px solid ${expanded ? "#1677ff" : "#242422"}`,
                overflow: "hidden",
                cursor: expanded ? "default" : "pointer",
                position: "relative",
                gridColumn: expanded ? "1 / -1" : undefined,
                gridRow: expanded ? "1 / 3" : undefined,
                opacity: hidden ? 0 : 1,
                transform: hidden ? "scale(0.96)" : "scale(1)",
                pointerEvents: hidden ? "none" : "auto",
                transition:
                    "opacity 0.3s ease, transform 0.3s ease, border-color 0.2s ease, grid-column 0.4s ease",
                zIndex: expanded ? 10 : 1,
                width: '98%'
            }}
        >
            {/* Thumbnail */}
            <div
                style={{
                    width: "100%",
                    height: expanded ? 350 : 130,
                    overflow: "hidden",
                    transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)",
                    flexShrink: 0,
                }}
            >

            {!expanded && (
                <div style={{
                    backgroundColor: `${thumbnailColor}`,
                    width: '100%',
                    height: '100%'
                }}></div>
            )}
            {expanded && (
                <>
                    <div style={{height:'50px'}}></div>
                    <SlideShow id={project}>
                        {slideImgUrl.map((url) => <SlideItem id={project} imgUrl={url}/>)}
                    </SlideShow>
                </>
            )}
            </div>

            {/* Body */}
            <div style={{padding: expanded ? "20px 24px 24px" : "12px 14px 14px", transition: "padding 0.35s ease" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            background: "#2e2e2c",
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <div style={{ width: 6, height: 5, background: "#666660", borderRadius: 1 }} />
                    </div>
                    <span
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: expanded ? 18 : 13.5,
                            fontWeight: 600,
                            color: "#e8e5e0",
                            letterSpacing: -0.2,
                            transition: "font-size 0.35s ease",
                        }}
                    >
            <Translator path={`projeto.${project}.title`}/>
          </span>
                </div>

                <p
                    style={{
                        fontSize: expanded ? 16 : 14,
                        color: "#888882",
                        marginBottom: 10,
                        fontWeight: 300,
                        lineHeight: 1.45,
                        textAlign: 'start',
                        transition: "font-size 0.35s ease",
                    }}
                >
                    <Translator path={`projeto.${project}.text`}/>
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {tags.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: expanded ? 12 : 10.5,
                                color: "#888882",
                                background: "#252523",
                                border: "1px solid #2e2e2c",
                                borderRadius: 4,
                                padding: expanded ? "4px 10px" : "3px 8px",
                                transition: "font-size 0.35s ease, padding 0.35s ease",
                            }}
                        >
              {t}
            </span>
                    ))}
                </div>

                {/* Expanded Details */}
                {expanded && (
                    <div
                        style={{
                            marginTop: 20,
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gap: 10,
                            animation: "fadeUp 0.4s ease 0.15s both",
                        }}
                    >
                        {[
                            {label: "Technologies", value: parseIcons(icons)},
                            {label: "View", value: <ButtonWeb url={githubUrl}/>},
                            {label: "GithHub", value: <ButtonGithub url={viewUrl}/>},
                        ].map((d) => (
                            <div
                                key={d.label}
                                style={{
                                    background: "#141412",
                                    borderRadius: 8,
                                    padding: "13px 14px",
                                    border: "1px solid #242422",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 10.5,
                                        color: "#555550",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.7px",
                                        fontWeight: 500,
                                        marginBottom: 6,
                                    }}
                                >
                                    {d.label}
                                </div>
                                <div style={{fontSize: 14, color: "#c8c5c0"}}>{d.value}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Close button */}
            {expanded && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        width: 28,
                        height: 28,
                        background: "#252523",
                        border: "1px solid #333330",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#aaa",
                        fontSize: 18,
                        lineHeight: 1,
                        zIndex: 20,
                    }}
                >
                    ×
                </button>
            )}
        </div>
    );
}

const parseIcons = (icons) => icons.map((i) => <img src={`https://skillicons.dev/icons?i=${i}`} height={40} />);