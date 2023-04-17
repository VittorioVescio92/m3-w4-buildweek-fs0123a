import { Col, Container, Row } from "react-bootstrap";
import keywordImg from "../Keyword.PNG";

const KeyPointsComponent = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={9}>
          <section className="rounded-3 border-dark profile p-5">
            <h3>Punti chiave</h3>
            <div className="d-flex justify-content-start align-items-center">
              <img src={keywordImg} alt="" className="img-fluid" />
              <div className="d-flex flex-column">
                <p className="ms-3 fw-bold">Linkedin For Creative Businesses—From Content to Clients.</p>
                <p className="ms-3">Ajeje ha partecipato a questo evento.</p>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default KeyPointsComponent;
