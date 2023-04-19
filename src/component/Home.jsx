import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import avatar from "../avatar.png";
import {
  CalendarDate,
  CardText,
  Image,
  PlayBtnFill,
} from "react-bootstrap-icons";
import { useState } from "react";
import ModalHome from "./ModalHome";
import ModalHomeImg from "./ModalHomeImg";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.content);

  const navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const [show, setShow] = useState(false);
  const handleCloseHome = () => setShow(false);
  const handleShowHome = () => setShow(true);

  const [showImg, setShowImg] = useState(false);
  const handleCloseHomeImg = () => setShowImg(false);
  const handleShowHomeImg = () => setShowImg(true);
  return (
    <>
      <Button onClick={navigateHomePage}></Button>
      <h1>provaaaaaaa</h1>
      <Container className="d-flex">
        <div className="mx-3">
          <div className="mx-3 bg-white border rounded p-4">
            <div>
              <img
                id="avatar"
                src={avatar}
                alt="Avatar"
                className="rounded-circle"
              />
              <h3>
                {user.name} {user.surname}
              </h3>
              <p>Studente</p>
              {/* dinamicizzare i p */}
            </div>
            <hr></hr>
            <div>
              <p>collegamenti</p>
            </div>
            <hr></hr>
            <div>
              <p>Accedi a strumenti e info</p>
            </div>
            <hr></hr>
            <div>
              icons
              <span>I miei elementi</span>
            </div>
          </div>
          <div className="mx-3 mt-3 bg-white border rounded p-4">
            <p>Gruppi</p>
            <p>Eventi</p>
            <p>Hashtag più seguiti</p>
            <hr></hr>
            <Button>Scopri di più</Button>
          </div>
        </div>
        <Container className="bg-white border rounded">
          <div className="m-3">
            <div className="d-flex mb-3">
              <a>
                <div className="m-2">
                  <img
                    id="avatar"
                    src={avatar}
                    alt="Avatar"
                    className="rounded-circle"
                  />
                </div>
              </a>
              <Button
                className="border"
                variant="light"
                onClick={handleShowHome}
              >
                {/* onclick modale */}
                <span className="text-secondary">Avvia un post</span>
              </Button>
              <ModalHome show={show} handleCloseHome={handleCloseHome} />
            </div>
            <div>
              <Button
                variant="white"
                className="p-0 mx-2"
                onClick={handleShowHomeImg}
              >
                <Image className="text-primary" />
                <span className="mx-2 text-secondary">Foto</span>
              </Button>
              <ModalHomeImg
                showImg={showImg}
                handleCloseHomeImg={handleCloseHomeImg}
              />

              <Button variant="white" className="p-0 mx-2">
                <PlayBtnFill className="text-success" />
                <span className="mx-2 text-secondary">Video</span>
              </Button>
              <Button variant="white" className="p-0 mx-2">
                <CalendarDate className="text-warning" />
                <span className="mx-2 text-secondary">Evento</span>
              </Button>
              <Button variant="white" className="p-0 mx-2">
                <CardText className="text-danger" />
                <span className="mx-2 text-secondary">Scrivi un articolo</span>
              </Button>
            </div>
          </div>
          {/* <div className="d-flex">
        <span>
          <hr></hr>
          ordina
        </span>
      </div> */}
        </Container>
        <div className="mx-3">
          <div className="mx-3 bg-white border rounded p-4">
            <div>
              <h5>Linkedin Notizie</h5>
              <ul>
                <li>Le top Companies del 2023 in Italia</li>
              </ul>
              <Button>Visualizza altro</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
