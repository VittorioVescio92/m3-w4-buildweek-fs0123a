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
  ArrowsFullscreen,
  BellFill,
  Bookmark,
  BookmarkFill,
  Bullseye,
  CalendarDate,
  CardText,
  CaretDown,
  ChatText,
  Clipboard2Check,
  Dot,
  EyeSlashFill,
  GearFill,
  HandThumbsUp,
  PencilSquare,
  PlayBtnFill,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyProfileAction, getPostsAction } from "../redux/actions";
import coverImg from "../assets/img/cover.jpeg";

const Jobs = () => {
  const myProfile = useSelector((state) => state.myProfile.content);

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
                    <Link>OPERAI STABILIMENTO DI SANT'ANGELO DEI LOMBARDI</Link>
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
