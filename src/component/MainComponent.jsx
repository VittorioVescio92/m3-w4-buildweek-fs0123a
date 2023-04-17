/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import coverImg from "../assets/img/cover.jpeg";
import profileImg from "../assets/img/img-profile.jpg";
import { Pencil } from "react-bootstrap-icons";

const MainComponent = () => {
  return (
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
              <Col xs={12}>
                <div className="py-3 px-3">
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
                </div>
              </Col>
              <Col xs={12}>
                {/* Carousel React Bootstrap */}
                <Carousel slide={false}>
                  <Carousel.Item>
                    <Card>
                      <Card.Body>
                        <Card.Title className="truncate">Card Title</Card.Title>
                        <Card.Text className="truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        <Card.Link>testo</Card.Link>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default MainComponent;
