import {Navbar} from "react-bootstrap";
import './NavBar.css';
import {NavBarDropDownButton} from "./NavBarDropDownButton/NavBarDropDownButton.jsx";
import {NavBarButton} from "./NavBarButton/NavBarButton.jsx";
import Home from "../../assets/svg/home.svg"
import Edit from "../../assets/svg/edit.svg"
import User from "../../assets/svg/user.svg"
import {FolderSvg} from "../SvgComponents/FolderSvg.jsx";
import Translator from "../../i18n/Translator.js";

export const NavBar = () => {

    function goToHome() {
        let y = document.getElementById("content-home").offsetTop;
        window.scroll({
            top: y - 160,
            behavior: 'smooth'
        });
    }

    function goToAboutMe() {
        let y = document.getElementById("content-aboutme").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToProjects() {
        let y = document.getElementById("content-projects").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToContact() {
        let y = document.getElementById("content-contacts").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Navbar>
                <div className="button-container">
                    <NavBarButton img={Home} title={<Translator path="navbar.home"/>} onTap={() => goToHome()}/>
                    <NavBarButton img={Edit} title={<Translator path="navbar.aboutMe"/>} onTap={() => goToAboutMe()}/>
                    <NavBarButton  title={<Translator path="navbar.projects"/>} onTap={() => goToProjects()}>
                        <FolderSvg/>
                    </NavBarButton>
                    <NavBarButton img={User} title={<Translator path="navbar.contact"/>} onTap={() => goToContact()}/>
                    <NavBarDropDownButton/>
                </div>
            </Navbar>
        </>
    )
}