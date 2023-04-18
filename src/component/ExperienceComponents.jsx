/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row } from "react-bootstrap";
import EpicodeImg from "../assets/img/epicode-logo.png";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserExperienceAction } from "../redux/actions";

const ExperienceComponents = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.content._id);
  const experience = useSelector(state => state.experience.content);
  // const experienceData = (state => state.experience.experienceData)

  useEffect(() => {
    dispatch(getUserExperienceAction(userId));
  }, []);

  const navigate = useNavigate();
  const navigateToExperience = () => {
    navigate("/experience");
  };
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
            <div className="d-flex justify-content-center">
              <Button
                // to="#"
                onClick={navigateToExperience}
                variant="white"
                className="d-flex text-secondary align-items-center"
              >
                Mostra tutte le esperienze (6)
                <ArrowRight className="ms-2" />
              </Button>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceComponents;
