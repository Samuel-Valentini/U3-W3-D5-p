import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid className="w-100 text-white m-0 p-0">
            <Row className="flex-column flex-md-row w-100 m-0 p-0">
                <Col className="bg-info col-md-2">NavBar</Col>
                <Col className="bg-warning">Main</Col>
            </Row>
        </Container>
    );
};
export default Home;
