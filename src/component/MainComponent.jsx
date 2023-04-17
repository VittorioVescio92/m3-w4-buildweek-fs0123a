/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import coverImg from "../assets/img/cover.jpeg";
import profileImg from "../assets/img/img-profile.jpg";
import { Pencil } from "react-bootstrap-icons";
import InformationsComponent from "./InformationsComponent";
import KeyPointsComponent from "./KeyPointsComponent";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <section className="rounded-3 border-dark mt-4 profile">
              <Row>
                <Col xs={12}>
                  <div className="hero-img">
                    <img src={coverImg} alt="" className="img-fluid" />
                    <Link to="/">
                      <Pencil />
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="p-3">
                    <div className="d-flex">
                      <div className="rounded-circle image-profile">
                        <img className="img-fluid" src={profileImg} alt="" />
                      </div>
                      <div className="flex-grow-1 edit">
                        <div className="text-end">
                          <Link to="/">
                            <Pencil />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-3">Mario Rossi</h1>
                    <p className="job">Junior Front-End Developer</p>
                    <p className="address">
                      <span>Roma, Lazio, Italia</span> - <Link to="/">Informazioni di contatto</Link>
                    </p>
                    <div className="link">
                      <Link to="/">92 Collegamenti</Link>
                    </div>
                    <div className="d-flex mt-3">
                      <Button className="me-2">Disponibile per</Button>
                      <Button variant="outline-primary" className="me-2">
                        Aggiungi sezione del profilo
                      </Button>
                      <Button variant="outline-light">Altro</Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="p-3">
                    {/* Carousel React Bootstrap */}
                    <Carousel slide={false}>
                      <Carousel.Item>
                        <Card>
                          <Card.Body>
                            <Card.Title className="truncate">Disponibile a lavorare 1</Card.Title>
                            <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
                            <div>
                              <Card.Link>Mostra Dettagli</Card.Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>

                      <Carousel.Item>
                        <Card>
                          <Card.Body>
                            <Card.Title className="truncate">Disponibile a lavorare 2</Card.Title>
                            <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
                            <div>
                              <Card.Link>Mostra Dettagli</Card.Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>

                      <Carousel.Item>
                        <Card>
                          <Card.Body>
                            <Card.Title className="truncate">Disponibile a lavorare 3</Card.Title>
                            <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
                            <div>
                              <Card.Link>Mostra Dettagli</Card.Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Col>
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
