import "./ProjectCard.css";
import Translator from "../../i18n/Translator.js";
import { ButtonGithub } from "../Button/ButtonGithub.jsx";
import { ButtonWeb } from "../Button/ButtonWeb.jsx";
import { SlideShow } from "../SlideShow/SlideShow.jsx";
import { SlideItem } from "../SlideShow/SlideItem/SlideItem.jsx";
import { X } from "@phosphor-icons/react"

export const ProjectCard = ({
    tags,
    project,
    expanded,
    hidden,
    onExpand,
    onClose,
    icons,
    viewUrl,
    githubUrl,
    slideImgUrl,
    cardRef,
    logoProject
}) => {
    if (hidden) return null;

    if (expanded) {
        return (
            <div
                ref={cardRef}
                className="project-card project-card--expanded"
            >
                <div className="project-card__slideshow">
                    <SlideShow>
                        {slideImgUrl.map((url) => (
                            <SlideItem key={url} imgUrl={url} />
                        ))}
                    </SlideShow>
                </div>

                <div className="project-card__details">
                    <button
                        className="project-card__close"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        aria-label="Close project details"
                    >
                        <X size={16} weight="bold" />
                    </button>

                    <div className="project-card__exp-header">
                        <div className="project-card__exp-thumb">
                            <img src={logoProject} alt="" />
                        </div>
                        <span className="project-card__exp-title">
                            <Translator path={`projeto.${project}.title`} />
                        </span>
                    </div>

                    <p className="project-card__exp-desc">
                        <Translator path={`projeto.${project}.text`} />
                    </p>

                    <div className="project-card__exp-tags">
                        {tags.map((t) => (
                            <span key={t} className="project-card__tag">{t}</span>
                        ))}
                    </div>

                    <hr className="project-card__divider" />

                    <div className="project-card__detail-row">
                        <span className="project-card__detail-label">Technologies</span>
                        <div className="project-card__detail-value">
                            {icons.map((i) => (
                                <div key={i} className="project-card__tech-chip" title={i}>
                                    <img src={`https://skillicons.dev/icons?i=${i}`} alt={i} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {viewUrl && (
                        <div className="project-card__detail-row">
                            <span className="project-card__detail-label">View project</span>
                            <div className="project-card__detail-value">
                                <ButtonWeb url={viewUrl} />
                            </div>
                        </div>
                    )}

                    {githubUrl && (
                        <div className="project-card__detail-row">
                            <span className="project-card__detail-label">Source code</span>
                            <div className="project-card__detail-value">
                                <ButtonGithub url={githubUrl} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div
            ref={cardRef}
            className="project-card project-card--collapsed"
            onClick={onExpand}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onExpand(); }}
            aria-label={`View project details for ${project}`}
        >
            <div className="project-card__thumb">
                <img src={logoProject} alt="" />
            </div>
            <div className="project-card__info">
                <span className="project-card__name">
                    <Translator path={`projeto.${project}.title`} />
                </span>
                <span className="project-card__tags-line">
                    {tags.join(" \u00B7 ")}
                </span>
            </div>
        </div>
    );
}
