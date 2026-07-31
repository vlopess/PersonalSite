import "./NavBarButton.css"

export const NavBarButton = ({ icon: Icon, title, onTap }) => {
    return (
        <button className="navbar-btn" onClick={onTap} aria-label={title}>
            {Icon && <Icon size={18} weight="duotone" />}
            <span className="navbar-btn-label">{title}</span>
        </button>
    )
}
