import React from "react";
import "./ProjectCard.css";
import Translator from "../../i18n/Translator.js";
import { ButtonGithub } from "../Button/ButtonGithub.jsx";
import { ButtonWeb } from "../Button/ButtonWeb.jsx";
import { SlideShow } from "../SlideShow/SlideShow.jsx";
import { SlideItem } from "../SlideShow/SlideItem/SlideItem.jsx";

export const ProjectCard = ({
                              tags,
                              project,
                              expanded,
                              hidden,
                              onExpand,
                              onClose,
                              thumbnailColor,
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
            style={{ "--thumbnail-color": thumbnailColor }}
        >
          {/* Left: slideshow */}
          <div className="project-card__slideshow">
            <SlideShow id={project}>
              {slideImgUrl.map((url) => (
                  <SlideItem id={project} imgUrl={url} key={url} />
              ))}
            </SlideShow>
          </div>

          {/* Right: details */}
          <div className="project-card__details">
            <button
                className="project-card__close"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                aria-label="Close"
            >
              ×
            </button>

            <div className="project-card__exp-header">
              <div
                  className="project-card__exp-thumb"
              >
                  <img width={50} src={logoProject} alt="logo"/>
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
                {parseIcons(icons)}
              </div>
            </div>

            <div className="project-card__detail-row">
              <span className="project-card__detail-label">View project</span>
              <div className="project-card__detail-value">
                <ButtonWeb url={viewUrl} />
              </div>
            </div>

            <div className="project-card__detail-row">
              <span className="project-card__detail-label">Source code</span>
              <div className="project-card__detail-value">
                <ButtonGithub url={githubUrl} />
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div
          ref={cardRef}
          className="project-card project-card--collapsed"
          style={{ "--thumbnail-color": thumbnailColor }}
          onClick={onExpand}
      >
          <div
              className="project-card__thumb">
              <img
                   src={logoProject}
                   alt="logo"/>

          </div>

          <div className="project-card__info">
        <span className="project-card__name">
          <Translator path={`projeto.${project}.title`} />
        </span>
          <span className="project-card__tags-line">
          {tags.join(" · ")}
        </span>
        </div>
      </div>
  );
};

const parseIcons = (icons) =>
    icons.map((i) => (
        <div key={i}>
          <img
              src={`https://skillicons.dev/icons?i=${i}`}
              alt={i}
              title={i}
              width={25}
              height={25}
          />
        </div>
    ));