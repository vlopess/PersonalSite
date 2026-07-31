import "./Card.css"

export const Card = ({id, children, height = 280}) => {
    return (
        <div
            id={id}
            className="card"
            style={{ '--card-min-height': height + 'px' }}
        >
            <div className="card-inner">
                {children}
            </div>
        </div>
    )
}
