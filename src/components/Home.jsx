import { Col, Container, Row } from "react-bootstrap";
import NavbarM from "./NavbarM";

const Home = () => {
    return (
        <Container fluid className="w-100 text-white m-0 p-0">
            <Row className="flex-column flex-md-row w-100 m-0 p-0">
                <Col
                    className="col-md-2 text-white"
                    style={{ backgroundColor: "#252526" }}>
                    <NavbarM />
                </Col>
                <Col className="bg-warning">Main</Col>
            </Row>
        </Container>
    );
};
export default Home;
