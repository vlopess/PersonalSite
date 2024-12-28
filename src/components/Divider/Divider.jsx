import "./Divider.css";

export const Divider = ({text}) => {
    return (
        <>
            <div className={"divider"}>
                <hr/>
                <span>{text}</span>
                <hr/>
            </div>
        </>
    )
}