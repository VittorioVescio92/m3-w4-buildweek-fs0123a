import { Col, Container, Row } from "react-bootstrap";
import EpicodeImg from "../assets/img/epicode-logo.png";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ExperienceComponents = () => {
  return (
    <Container className="mt-2 d-flex p-0">
      <Row className="d-flex">
        <Col>
          <section className="rounded-3 border-dark profile p-3">
            <h3>Esperienze</h3>
            <div className="d-flex justify-content-start align-items-center">
              <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
              <div className="d-flex flex-column">
                <p className="ms-3 fw-bold text-secondary">
                  Front-end developer: HTML5, CSS3, SASS, UI/UX, ReactJS, Redux, TypeScript
                </p>
                <p className="ms-3 text-secondary">Strive School</p>
                <p className="ms-3 text-secondary">giu 2019 - Presente - 3 anni 11 mesi</p>
                <p className="ms-3 mt-3">
                  <span className="fw-bold">Competenze: </span> Prototyping · Figma · Adobe XD · Agile · Scrum · Node.js
                  · TypeScript · SASS · HTML5 · CSS3 · Redux · GitHub · Git
                </p>
              </div>
            </div>
            <hr></hr>
            <Row className="d-flex">
              <Col md={9}>
                <div className="d-flex justify-content-start align-items-center">
                  <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                  <div className="d-flex flex-column">
                    <p className="ms-3 fw-bold text-secondary">
                      Front-end developer: HTML5, CSS3, SASS, UI/UX, ReactJS, Redux, TypeScript
                    </p>
                    <p className="ms-3 text-secondary">Strive School</p>
                    <p className="ms-3 text-secondary">giu 2019 - Presente - 3 anni 11 mesi</p>
                    <p className="ms-3 mt-3">
                      <span className="fw-bold">Competenze: </span> Prototyping · Figma · Adobe XD · Agile · Scrum ·
                      Node.js · TypeScript · SASS · HTML5 · CSS3 · Redux · GitHub · Git
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row className="d-flex">
              <Col md={9}>
                <div className="d-flex justify-content-start align-items-center">
                  <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                  <div className="d-flex flex-column">
                    <p className="ms-3 fw-bold text-secondary">
                      Front-end developer: HTML5, CSS3, SASS, UI/UX, ReactJS, Redux, TypeScript
                    </p>
                    <p className="ms-3 text-secondary">Strive School</p>
                    <p className="ms-3 text-secondary">giu 2019 - Presente - 3 anni 11 mesi</p>
                    <p className="ms-3 mt-3">
                      <span className="fw-bold">Competenze: </span> Prototyping · Figma · Adobe XD · Agile · Scrum ·
                      Node.js · TypeScript · SASS · HTML5 · CSS3 · Redux · GitHub · Git
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>

            <Row className="d-flex">
              <Col md={9}>
                <div className="d-flex justify-content-start align-items-center">
                  <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                  <div className="d-flex flex-column">
                    <p className="ms-3 fw-bold text-secondary">
                      Front-end developer: HTML5, CSS3, SASS, UI/UX, ReactJS, Redux, TypeScript
                    </p>
                    <p className="ms-3 text-secondary">Strive School</p>
                    <p className="ms-3 text-secondary">giu 2019 - Presente - 3 anni 11 mesi</p>
                    <p className="ms-3 mt-3">
                      <span className="fw-bold">Competenze: </span> Prototyping · Figma · Adobe XD · Agile · Scrum ·
                      Node.js · TypeScript · SASS · HTML5 · CSS3 · Redux · GitHub · Git
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>

            <Row className="d-flex">
              <Col md={9}>
                <div className="d-flex justify-content-start align-items-center">
                  <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                  <div className="d-flex flex-column">
                    <p className="ms-3 fw-bold text-secondary">
                      Front-end developer: HTML5, CSS3, SASS, UI/UX, ReactJS, Redux, TypeScript
                    </p>
                    <p className="ms-3 text-secondary">Strive School</p>
                    <p className="ms-3 text-secondary">giu 2019 - Presente - 3 anni 11 mesi</p>
                    <p className="ms-3 mt-3">
                      <span className="fw-bold">Competenze: </span> Prototyping · Figma · Adobe XD · Agile · Scrum ·
                      Node.js · TypeScript · SASS · HTML5 · CSS3 · Redux · GitHub · Git
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Link to="#" className="d-flex justify-content-center text-secondary align-items-center">
              Mostra tutte le esperienze (6)
              <ArrowRight className="ms-2" />
            </Link>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceComponents;
