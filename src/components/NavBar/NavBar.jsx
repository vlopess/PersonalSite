import {Col, Container, Navbar, Row} from "react-bootstrap";
import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Row style={{width: "100%"}}>
                    <Col xs={8} sm={8} md={8} lg={10}>
                        <Container>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            Teste <br/>
                            Teste
                        </Container>
                    </Col>
                </Row>
            </Navbar>
        </>
    )
}