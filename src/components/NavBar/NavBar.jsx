import { useTranslation } from "react-i18next"
import './NavBar.css'
import { NavBarDropDownButton } from "./NavBarDropDownButton/NavBarDropDownButton.jsx"
import { NavBarButton } from "./NavBarButton/NavBarButton.jsx"
import { House, PencilLine, Folder, Handshake, User } from "@phosphor-icons/react"

export const NavBar = () => {
    const { t } = useTranslation()

    function scrollTo(id, offset = 80) {
        const el = document.getElementById(id)
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <nav className="navbar" role="navigation" aria-label={t("navbar.navigation", "Main navigation")}>
            <div className="navbar-inner">
                <NavBarButton icon={House} title={t("navbar.home")} onTap={() => scrollTo("content-home", 160)}/>
                <NavBarButton icon={PencilLine} title={t("navbar.aboutMe")} onTap={() => scrollTo("content-aboutme")}/>
                <NavBarButton icon={Folder} title={t("navbar.projects")} onTap={() => scrollTo("content-projects")}/>
                <NavBarButton icon={Handshake} title={t("navbar.services")} onTap={() => scrollTo("content-services")}/>
                <NavBarButton icon={User} title={t("navbar.contact")} onTap={() => scrollTo("content-contacts")}/>
                <NavBarDropDownButton/>
            </div>
        </nav>
    )
}
