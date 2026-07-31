import './NavBar.css'
import { NavBarDropDownButton } from "./NavBarDropDownButton/NavBarDropDownButton.jsx"
import { NavBarButton } from "./NavBarButton/NavBarButton.jsx"
import { House, PencilLine, Folder, User } from "@phosphor-icons/react"
import Translator from "../../i18n/Translator.js"

export const NavBar = () => {
    function scrollTo(id, offset = 80) {
        const el = document.getElementById(id)
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div className="navbar-inner">
                <NavBarButton icon={House} title={<Translator path="navbar.home"/>} onTap={() => scrollTo("content-home", 160)}/>
                <NavBarButton icon={PencilLine} title={<Translator path="navbar.aboutMe"/>} onTap={() => scrollTo("content-aboutme")}/>
                <NavBarButton icon={Folder} title={<Translator path="navbar.projects"/>} onTap={() => scrollTo("content-projects")}/>
                <NavBarButton icon={User} title={<Translator path="navbar.contact"/>} onTap={() => scrollTo("content-contacts")}/>
                <NavBarDropDownButton/>
            </div>
        </nav>
    )
}
