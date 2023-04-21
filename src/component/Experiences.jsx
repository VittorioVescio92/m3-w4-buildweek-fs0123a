import { Button, Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "./experience/ExperienceCard";
import Aside from "./Aside";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Experiences = () => {
  const navigate = useNavigate();
  const experience = useSelector(state => state.experience.content);

  const navigateToHome = () => {
    navigate("/profile");
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-2 p-0">
      <Row>
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
            {experience && experience.map(item => <ExperienceCard key={item._id} item={item} />)}
          </section>
        </Col>
        <Col md={3} className="aside">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
