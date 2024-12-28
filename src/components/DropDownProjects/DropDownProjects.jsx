import "./DropDownProjects.css";

export const DropDownProjects = ({title, children}) => {
    return (
        <>
            <div className="dropdown">
                <input
                    hidden=""
                    className="sr-only"
                    name={title.replaceAll(" ", "")}
                    id={title.replaceAll(" ", "")}
                    type="checkbox"
                />
                <label
                    aria-label="dropdown scrollbar"
                    htmlFor={title.replaceAll(" ", "")}
                    className="trigger"
                >{title}</label>
                <ul className="list webkit-scrollbar" role="list" dir="auto">
                    {
                        children.map((child) => (
                            <li className="listitem" role="listitem">
                                <article className="article">{child}</article>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}