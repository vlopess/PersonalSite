export const Card = ({children}) => {
    return (
        <>
            <div style={{
                backgroundColor: "black",
                borderRadius: "15px",
                padding: "25px",
                margin: "25px",
                minHeight: "200px",
            }}>
                {children}
            </div>
        </>
    )
}