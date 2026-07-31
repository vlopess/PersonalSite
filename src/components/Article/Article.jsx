import { Article as ArticleIcon } from "@phosphor-icons/react"
import "./Article.css"

export const Article = ({link, text, icon: Icon, more, featured, thumbnail}) => {
    if (featured && thumbnail) {
        return (
            <a className="article-featured" href={link} target="_blank" rel="noopener noreferrer">
                <div className="article-featured-img">
                    <img src={thumbnail} alt="" loading="lazy" />
                </div>
                <p className="article-featured-title">{text}</p>
            </a>
        )
    }

    const LeftIcon = Icon || ArticleIcon
    return (
        <div className={"article-item" + (more ? " article-item--more" : "")}>
            <LeftIcon size={16} weight={Icon ? "bold" : "duotone"} />
            <a className="article-link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
        </div>
    )
}
