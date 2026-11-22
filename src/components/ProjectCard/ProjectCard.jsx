import { useTranslation } from "react-i18next"
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
    const { t } = useTranslation();
    const translatedTags = tags.map((tag) => t(`projectTags.${tag}`, tag));

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
                        aria-label={t("projectDetails.close", "Close project details")}
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
                        {translatedTags.map((tag) => (
                            <span key={tag} className="project-card__tag">{tag}</span>
                        ))}
                    </div>

                    <hr className="project-card__divider" />

                    <div className="project-card__detail-row">
                        <span className="project-card__detail-label">{t("projectDetails.technologies", "Technologies")}</span>
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
                            <span className="project-card__detail-label">{t("projectDetails.view", "View project")}</span>
                            <div className="project-card__detail-value">
                                <ButtonWeb url={viewUrl} />
                            </div>
                        </div>
                    )}

                    {githubUrl && (
                        <div className="project-card__detail-row">
                            <span className="project-card__detail-label">{t("projectDetails.source", "Source code")}</span>
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
            aria-label={t("projectDetails.open", { defaultValue: "View project details for {{project}}", project: t(`projeto.${project}.title`) })}
        >
            <div className="project-card__thumb">
                <img src={logoProject} alt="" />
            </div>
            <div className="project-card__info">
                <span className="project-card__name">
                    <Translator path={`projeto.${project}.title`} />
                </span>
                <span className="project-card__tags-line">
                    {translatedTags.join(" \u00B7 ")}
                </span>
            </div>
        </div>
    );
}
