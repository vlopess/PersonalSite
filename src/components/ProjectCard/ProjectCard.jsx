import "./ProjectCard.css";
import Translator from "../../i18n/Translator.js";
import {ButtonGithub} from "../Button/ButtonGithub.jsx";
import {ButtonWeb} from "../Button/ButtonWeb.jsx";
import {SlideShow} from "../SlideShow/SlideShow.jsx";
import {SlideItem} from "../SlideShow/SlideItem/SlideItem.jsx";
import React from "react";

export const ProjectCard = ({ tags, project, expanded, hidden, onExpand, onClose, thumbnailColor, icons, viewUrl, githubUrl, slideImgUrl, cardRef}) => {
  const hoverRef = React.useRef(null);

  return (
    <div
      ref={cardRef}
      onClick={!expanded ? onExpand : undefined}
      onMouseEnter={() => { if (!expanded) hoverRef.current?.classList.add('hovered'); }}
      onMouseLeave={() => { if (!expanded) hoverRef.current?.classList.remove('hovered'); }}
      className={`project-card ${expanded ? 'expanded' : ''} ${hidden ? 'hidden' : ''}`}
      style={{ '--thumbnail-color': thumbnailColor }}
    >
      {/* Thumbnail with enhanced styling */}
      <div
        ref={hoverRef}
        className="card-thumbnail"
      >
        {!expanded && (
          <div className="project-icon">
            {/* Project icon based on type */}
            {project === "Movierace" && <div className="movierace" />}
            {project === "CVCheck" && <div className="cvcheck" />}
            {project === "languageToday" && <div className="languagetoday" />}
            {project === "pixelguess" && <div className="pixelguess" />}
            {project === "kristnotes" && <div className="kristnotes" />}
            {project === "nullAcademyHub" && <div className="nullacademyhub" />}
            {project === "Goth4Goth" && <div className="goth4goth" />}
          </div>
        )}
        {expanded && (
          <>
            <div className="slideshow-container">
              <SlideShow id={project}>
                {slideImgUrl.map((url) => <SlideItem id={project} imgUrl={url} key={url}/>)}
              </SlideShow>
            </div>
          </>
        )}
      </div>

      {/* Body with improved spacing and typography */}
      <div className="card-content">
        {/* Header with improved typography */}
        <div className="card-header">
          <div className="icon-bg">
            <div className="icon-dot" />
          </div>
          <span className="title">
            <Translator path={`projeto.${project}.title`}/>
          </span>
        </div>

        <p className="card-description">
          <Translator path={`projeto.${project}.text`}/>
        </p>

        {/* Tags with improved styling */}
        <div className="card-tags">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* Enhanced Expanded Details */}
        {expanded && (
          <div className="card-details">
            {[
              {label: "TECHNOLOGIES", value: parseIcons(icons)},
              {label: "VIEW PROJECT", value: <ButtonWeb url={viewUrl}/>},
              {label: "SOURCE CODE", value: <ButtonGithub url={githubUrl}/>},
            ].map((d) => (
              <div key={d.label} className="detail-item">
                <div className="detail-label">
                  {d.label}
                </div>
                <div className="detail-value">{d.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Improved Close button */}
        {expanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="close-button"
            onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

const parseIcons = (icons) => icons.map((i) => <img src={`https://skillicons.dev/icons?i=${i}`} height={40} style={{maxWidth: "100%", margin: "4px"}}/>);