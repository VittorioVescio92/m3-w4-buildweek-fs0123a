import {
  Button,
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import avatar from "../avatar.png";
import {
  ArrowRight,
  BellFill,
  Bookmark,
  BookmarkFill,
  Bullseye,
  Clipboard2Check,
  EyeSlashFill,
  GearFill,
  PencilSquare,
  PlayBtnFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkedinLogo from "../assets/img/linkedin-logo.png";

const Jobs = () => {
  const myProfile = useSelector((state) => state.myProfile.content.image);
  console.log(myProfile);

  return (
    <>
      <Container className="mt-2 mb-5">
        <Row>
          {/* COLONNA SINISTRA */}
          <Col md={3}>
            <div className="sticky-top">
              <div className="bg-white border rounded mt-3">
                <ListGroup className="my-3" variant="flush">
                  <ListGroup.Item>
                    <Link className="text-dark">
                      <div className="d-flex">
                        <span className="me-1">
                          <BookmarkFill className="me-2 fs-5 text-secondary" />
                        </span>
                        Le mie offerte di lavoro
                      </div>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="text-dark">
                      <div className="d-flex">
                        <span className="me-1">
                          <BellFill className="me-2 fs-5 text-secondary" />
                        </span>
                        Avvisi offerte di lavoro
                      </div>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="text-dark">
                      <div className="d-flex">
                        <span className="me-1">
                          <Clipboard2Check className="me-2 fs-5 text-secondary" />
                        </span>
                        Valutazioni delle competenze
                      </div>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="text-dark">
                      <div className="d-flex">
                        <span className="me-1">
                          <PlayBtnFill className="me-2 fs-5 text-secondary" />
                        </span>
                        Indicazioni per chi cerca lavoro
                      </div>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="text-dark">
                      <div className="d-flex">
                        <span className="me-1">
                          <GearFill className="me-2 fs-5 text-secondary" />
                        </span>
                        Impostazioni candidatura
                      </div>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Button variant="light" className="m-3 border border-primary">
                <div className="d-flex">
                  <div>
                    <PencilSquare className="text-primary me-4 my-3 fs-3" />
                  </div>
                  <span className="text-primary fw-bold mt-2">
                    Pubblica offerta gratuita
                  </span>
                </div>
              </Button>
            </div>
          </Col>

          {/* COLONNA CENTRALE */}
          <Col md={6}>
            {/* AVVIA UN POST */}
            <div className="bg-white border rounded mt-3">
              <div className="m-3">
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <h5 className="me-5">
                      Ricerche di offerte di lavoro recenti
                    </h5>
                    <Button
                      variant="light"
                      size="sm"
                      className="text-secondary rounded"
                    >
                      Cancella
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="fw-bold mb-0">
                    qualsiasi -{" "}
                    <span className="text-success fw-light">4 nuove</span>
                  </p>
                  <Badge bg="white" text="secondary" className="p-0">
                    Avviso attivo - Napoli,Campania,Italia
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded mt-3 post">
              <div className="m-3">
                <div className="d-flex mb-4">
                  <div className="mt-2">
                    <h5 className="m-0">Consigliato per te</h5>
                    <span className="fw-light text-secondary">
                      Sulla base del tuo profilo e della tua cronologia delle
                      ricerche
                    </span>
                  </div>
                </div>

                {/* POSTS */}
                <div>
                  <div className="d-flex">
                    <div>
                      <Image
                        src={avatar}
                        alt=""
                        width={50}
                        className="me-3"
                      ></Image>
                    </div>
                    <div>
                      <Link>
                        OPERAI STABILIMENTO DI SANT'ANGELO DEI LOMBARDI
                      </Link>
                      <p className="m-0">Ferrero</p>
                      <p className="m-0 fw-light">
                        Sant'Angelo dei Lombardi, Campania, Italia (In sede)
                      </p>
                      <div className="mb-3">
                        <Bullseye className="text-success fw-bold" />
                        <span className="fw-light"> Selezione attiva</span>
                      </div>
                      <span className="fw-light">1 mese fa</span>
                    </div>
                    <div className="d-flex">
                      <EyeSlashFill className="fs-3 mx-3" />
                      <Bookmark className="fs-3" />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="d-flex" id="jobs-eye">
                    <div>
                      <Image
                        src={avatar}
                        alt=""
                        width={50}
                        className="me-3"
                      ></Image>
                    </div>
                    <div>
                      <Link>
                        OPERAI STABILIMENTO DI SANT'ANGELO DEI LOMBARDI
                      </Link>
                      <p className="m-0">Ferrero</p>
                      <p className="m-0 fw-light">
                        Sant'Angelo dei Lombardi, Campania, Italia (In sede)
                      </p>
                      <div className="mb-3">
                        <Bullseye className="text-success fw-bold" />
                        <span className="fw-light"> Selezione attiva</span>
                      </div>
                      <span className="fw-light">1 mese fa</span>
                    </div>
                    <div className="d-flex" id="jobs-eye">
                      <EyeSlashFill
                        className="fs-3 mx-3 d-none"
                        id="jobs-eye"
                      />
                      <Bookmark className="fs-3" />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="d-flex">
                    <div>
                      <Image
                        src={avatar}
                        alt=""
                        width={50}
                        className="me-3"
                      ></Image>
                    </div>
                    <div>
                      <Link>
                        OPERAI STABILIMENTO DI SANT'ANGELO DEI LOMBARDI
                      </Link>
                      <p className="m-0">Ferrero</p>
                      <p className="m-0 fw-light">
                        Sant'Angelo dei Lombardi, Campania, Italia (In sede)
                      </p>
                      <div className="mb-3">
                        <Bullseye className="text-success fw-bold" />
                        <span className="fw-light"> Selezione attiva</span>
                      </div>
                      <span className="fw-light">1 mese fa</span>
                    </div>
                    <div className="d-flex">
                      <EyeSlashFill className="fs-3 mx-3" />
                      <Bookmark className="fs-3" />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="white"
                      className="d-flex text-secondary align-items-center"
                    >
                      Mostra tutto
                      <ArrowRight className="ms-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* COLONNA DESTRA */}
          <Col md={3}>
            <div className="bg-white border rounded mt-3 p-3">
              <div>
                <h6 className="m-0">Disponibile a lavorare</h6>
                <span className="fw-light">
                  Consigliato in base alla tua attività
                </span>
              </div>
              <div className="d-flex mt-3 bg-light">
                <Link className="d-flex align-items-center">
                  <span className="text-dark">
                    Mostra ai recruiter che sei disponibile per nuove
                    opportunità di lavoro
                  </span>
                  <Image
                    src={myProfile}
                    alt=""
                    width={80}
                    height={80}
                    // per far coincidere la frase identica all'originale fare 40 e 40
                    className="rounded-circle"
                  ></Image>
                </Link>
              </div>
              <p className="mt-3">
                Ricevi più messaggi InMail dai recruiter con la cornice
                #OpenToWork: controlli tu chi la vede
              </p>
              <Link className="text-secondary">
                Inizia
                <ArrowRight className="ms-2" />
              </Link>
            </div>
            <div className="d-flex">
              <footer className="my-5 mx-2 d-flex flex-row">
                <Container className="p-0">
                  <div className="">
                    <Col className="p-0 d-flex flex-wrap justify-content-center">
                      {/* rgb(156 156 154) colore testo */}
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Informazioni
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Accessibilità
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Centro assistenza
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        <NavDropdown
                          className="text-secondary"
                          id="nav-dropdown-dark-example"
                          title="Privacy e condizioni"
                          menuVariant="secondary"
                        >
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="fw-bold"
                          >
                            Informativa sulla privacy
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.2"
                            className="fw-bold"
                          >
                            Contratto di licenza
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.3"
                            className="fw-bold"
                          >
                            Informativa sui cookie
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.4"
                            className="fw-bold"
                          >
                            Informativa sul copyright
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Opzioni per gli annunci pubblicitari
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Pubblicità
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        <NavDropdown
                          className="text-secondary"
                          id="nav-dropdown-dark-example"
                          title="Servizi alle aziende"
                          menuVariant="secondary"
                        >
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="fw-bold"
                          >
                            Talent Solutions
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.2"
                            className="fw-bold"
                          >
                            Sales Solutions
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.3"
                            className="fw-bold"
                          >
                            Pubblica offerta di lavoro gratuita
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.4"
                            className="fw-bold"
                          >
                            Marketing Solutions
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Scarica l'app Linkedin
                      </Link>
                      <Link
                        to="#"
                        className="mx-2 text-decoration-none text-secondary fw-light"
                      >
                        Altro
                      </Link>
                      <Row className="mt-3">
                        <Col>
                          <Image
                            src={LinkedinLogo}
                            alt="lnk-logo"
                            width={80}
                            height={40}
                            className="bg-light"
                          ></Image>
                          Linkedin Corporation &copy; 2023
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Container>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
