import "./Card.css"

export const Card = ({children, height = 250, width = "100%"}) => {
    return (
        <>
            <div
                className="card-container"
                style={{
                height: height + "px",
                width: width
            }}>
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}