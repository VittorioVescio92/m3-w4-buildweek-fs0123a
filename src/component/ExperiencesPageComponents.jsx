import { Button, Col, Container, Row } from "react-bootstrap";
import EpicodeImg from "../assets/img/epicode-logo.png";
import { ArrowLeft, Pencil } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import SideComponent from "./SideComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalExperienceDeletePut from "./ModalExperienceDeletePut";

const ExperiencesPageComponents = () => {
  const navigate = useNavigate();
  const experience = useSelector(state => state.experience.content);

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const [show, setShow] = useState(false);
  const handleCloseModalEx = () => setShow(false);
  const handleShowModalEx = () => setShow(true);
  return (
    <Container className="mt-2 d-flex p-0">
      <Row className="d-flex">
        <Col md={9}>
          <section className="mt-4 rounded-3 border-dark profile p-3">
            <div className="d-flex">
              <div className="d-flex justify-content-start align-items-center">
                <Button variant="light" onClick={navigateToHome} className="rounded-pill my-2">
                  <ArrowLeft className="fs-2" />
                </Button>
                <h3 className="ms-3">Esperienze</h3>
              </div>
            </div>
            {experience &&
              experience.map(item => (
                <div key={item._id}>
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                    <div className="d-flex justify-content-between  flex-grow-1">
                      <div className="d-flex flex-column">
                        <p className="ms-3 fw-bold text-secondary">{item.role}</p>
                        <p className="ms-3 text-secondary">{item.company}</p>
                        <p className="ms-3 text-secondary">
                          {new Date(item.startDate).toLocaleDateString()} -{" "}
                          {new Date(item.endDate).toLocaleDateString()}
                        </p>
                        <p className="ms-3 text-secondary">{item.area}</p>
                        <p className="ms-3 mt-3">
                          <span className="fw-bold">Competenze: </span> {item.description}
                        </p>
                      </div>
                      <div>
                        <Button onClick={handleShowModalEx} variant="light" className="rounded-pill mt-0 my-2 ml-auto">
                          <Pencil />
                        </Button>
                        <ModalExperienceDeletePut
                          show={show}
                          handleCloseModalEx={handleCloseModalEx}
                          experience={item}
                        />
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              ))}
          </section>
        </Col>
        <Col md={3}>
          <SideComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperiencesPageComponents;
