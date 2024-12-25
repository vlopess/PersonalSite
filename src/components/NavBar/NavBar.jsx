import {Col, Container, Navbar, Row} from "react-bootstrap";
import './NavBar.css';
import {NavBarButton} from "./NavBarButton/NavBarButton.jsx";

export const NavBar = () => {
    return (
        <>
            <Navbar  className="bg-body-tertiary" fixed="top">
                <Row style={{width: "100%"}}>
                    <Col xs={8} sm={8} md={8} lg={10}>
                        <Container>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <NavBarButton/>
                        </Container>
                    </Col>
                </Row>
            </Navbar>
        </>
    )
}