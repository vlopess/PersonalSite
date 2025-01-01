import {Navbar} from "react-bootstrap";
import './NavBar.css';
import {NavBarDropDownButton} from "./NavBarDropDownButton/NavBarDropDownButton.jsx";
import {NavBarButton} from "./NavBarButton/NavBarButton.jsx";
import Home from "../../assets/svg/home.svg"
import Edit from "../../assets/svg/edit.svg"
import User from "../../assets/svg/user.svg"
import {FolderSvg} from "../SvgComponents/FolderSvg.jsx";

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
                    <NavBarButton img={Home} title={"Home"} onTap={() => goToHome()}/>
                    <NavBarButton img={Edit} title={"Sobre mim"} onTap={() => goToAboutMe()}/>
                    <NavBarButton  title={"Projetos"} onTap={() => goToProjects()}>
                        <FolderSvg/>
                    </NavBarButton>
                    <NavBarButton img={User} title={"Contato"} onTap={() => goToContact()}/>
                    <NavBarDropDownButton/>
                </div>
            </Navbar>
        </>
    )
}