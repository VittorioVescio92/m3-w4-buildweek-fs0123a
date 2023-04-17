/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Col, Container, Row } from "react-bootstrap";
import coverImg from "../assets/img/cover.jpeg";
import profileImg from "../assets/img/img-profile.jpg";
import { Pencil } from "react-bootstrap-icons";
import InformationsComponent from "./InformationsComponent";
import KeyPointsComponent from "./KeyPointsComponent";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <section className="rounded-3 border-dark profile">
              <Row>
                <Col xs={12}>
                  <div className="hero-img">
                    <img src={coverImg} alt="" className="img-fluid" />
                  </div>
                </Col>
                <Col xs={12} className="py-3 px-5">
                  <div className="d-flex">
                    <div className="rounded-circle image-profile">
                      <img className="img-fluid" src={profileImg} alt="" />
                    </div>
                    <div className="flex-grow-1 edit">
                      <div className="text-end">
                        <a href="">
                          <Pencil />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-3">Mario Rossi</h1>
                  <p className="job">Junior Front-End Developer</p>
                  <p className="address">
                    <span>Roma, Lazio, Italia</span> - <a href="#">Informazioni di contatto</a>
                  </p>
                  <div className="link">
                    <a href="#">92 Collegamenti</a>
                  </div>
                  <div className="d-flex mt-3">
                    <Button className="me-2">Disponibile per</Button>
                    <Button variant="outline-primary" className="me-2">
                      Aggiungi sezione del profilo
                    </Button>
                    <Button variant="outline-light">Altro</Button>
                  </div>
                </Col>
                <Col xs={12}></Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
      <KeyPointsComponent />
      <InformationsComponent />
    </>
  );
};
export default MainComponent;
