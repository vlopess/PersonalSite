import "./Divider.css"

export const Divider = ({text}) => {
    return (
        <div className="divider">
            <span className="divider-line" aria-hidden="true"></span>
            <span className="divider-text">{text}</span>
            <span className="divider-line" aria-hidden="true"></span>
        </div>
    )
}
