import "./Card.css"

export const Card = ({id, children, height = 250, width = "100%", showPoint = false}) => {
    return (
        <>
            <div
                id={id}
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