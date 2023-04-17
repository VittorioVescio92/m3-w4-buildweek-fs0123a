import { Col, Container, Row } from "react-bootstrap";

const InformationsComponent = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={9}>
          <section className="rounded-3 border-dark profile p-5">
            <h3>Informazioni</h3>
            <p>Full Stack Developer. HTML - CSS - JavaScript - ReactJS - Java </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default InformationsComponent;
