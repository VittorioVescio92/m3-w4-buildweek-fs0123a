import {
  Button,
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Badge,
} from "react-bootstrap";
import ModalHome from "./home/ModalHome";
import ModalHomeImg from "./home/ModalHomeImg";
import ModalHomeEvent from "./home/ModalHomeEvent";
import ModalHomeVideo from "./home/ModalHomeVideo";
// import avatar from "../avatar.png";
import {
  ArrowsFullscreen,
  BellFill,
  BookmarkFill,
  CalendarDate,
  CardText,
  CaretDown,
  ChatText,
  Clipboard2Check,
  Dot,
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
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
