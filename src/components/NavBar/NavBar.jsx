import {Navbar} from "react-bootstrap";
import './NavBar.css';
import {NavBarButton} from "./NavBarButton/NavBarButton.jsx";

export const NavBar = () => {
    return (
        <>
            <Navbar>
                <NavBarButton/>
            </Navbar>
        </>
    )
}