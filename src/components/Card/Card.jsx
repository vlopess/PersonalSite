import "./Card.css"

export const Card = ({children, height = 200, width = "70.5%"}) => {
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