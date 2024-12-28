import "./NavBarButton.css"


export const NavBarButton = ({img, title, children, onTap}) => {
    return (
        <>
            <div className="button-container">
                <button className="button-navbar" onClick={onTap}>
                    {img && (<img src={img} alt=""/>)}
                    {!img && (children)}
                    {title}
                </button>
            </div>
        </>
    )
}