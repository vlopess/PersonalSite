import ArticleSvg from "../../assets/svg/article.svg";
import "./Article.css";

export const Article = ({link, text, svg = ArticleSvg}) => {
    return (
        <>
            <div className={"article-item"}>
                <img src={svg} alt="article"/>
                <a href={link} target={"_blank"}>{text}</a>
            </div>
        </>
    )
}