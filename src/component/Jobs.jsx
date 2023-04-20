import {
  Button,
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Badge,
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

const Jobs = () => {
  return (
    <>
      <Container className="mt-2 mb-5">
        <Row>
          {/* COLONNA SINISTRA */}
          <Col md={3}>
            <div className="bg-white border rounded mt-3">
              <ListGroup className="my-3" variant="flush">
                <ListGroup.Item>
                  <Link className="text-dark">
                    <div className="d-flex">
                      <span className="me-1">
                        <BookmarkFill className="me-2" />
                      </span>
                      Le mie offerte di lavoro
                    </div>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="text-dark">
                    <div className="d-flex">
                      <span className="me-1">
                        <BellFill className="me-2" />
                      </span>
                      Avvisi offerte di lavoro
                    </div>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="text-dark">
                    <div className="d-flex">
                      <span className="me-1">
                        <Clipboard2Check className="me-2" />
                      </span>
                      Valutazioni delle competenze
                    </div>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="text-dark">
                    <div className="d-flex">
                      <span className="me-1">
                        <PlayBtnFill className="me-2" />
                      </span>
                      Indicazioni per chi cerca lavoro
                    </div>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="text-dark">
                    <div className="d-flex">
                      <span className="me-1">
                        <GearFill className="me-2" />
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
                  <PencilSquare className="text-primary me-4 mt-3 fs-3" />
                </div>
                <span className="text-primary fw-bold">
                  Pubblica offerta gratuita
                </span>
              </div>
            </Button>
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
                      <EyeSlashFill className="fs-3" />
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
                      <EyeSlashFill className="fs-3" />
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
                      <EyeSlashFill className="fs-3" />
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
                <h5 className="m-0">Disponibile a lavorare</h5>
                <span className="fw-light">
                  Consigliato in base alla tua attività
                </span>
              </div>
              <div className="d-flex mt-3 bg-light">
                <Link className="d-flex">
                  <span className="text-dark">
                    Mostra ai recruiter che sei disponibile per nuove
                    opportunità di lavoro
                  </span>
                  <Image
                    src={avatar}
                    alt=""
                    width={50}
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
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
