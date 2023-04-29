import { Button, Col, Container, Row, Image, ListGroup, Badge, NavDropdown } from "react-bootstrap";
import ModalHome from "./home/ModalHome";
import ModalHomeImg from "./home/ModalHomeImg";
import ModalHomeEvent from "./home/ModalHomeEvent";
import ModalHomeVideo from "./home/ModalHomeVideo";
// import avatar from "../avatar.png";
import {
  ArrowsFullscreen,
  BookmarkFill,
  CalendarDate,
  CardText,
  CaretDown,
  ChatText,
  Dot,
  HandThumbsUp,
  Images,
  PlayBtnFill,
  Plus,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserPost, getMyProfileAction, getPostsAction } from "../redux/actions";
import coverImg from "../assets/img/cover.jpeg";
import LinkedinLogo from "../assets/img/linkedin-logo.png";

const Home = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(state => state.myProfile.content);
  const posts = useSelector(state => state.posts.content);
  console.log(posts);

  useEffect(() => {
    dispatch(getMyProfileAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

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

  const [showVideo, setShowVideo] = useState(false);
  const handleCloseHomeVideo = () => setShowVideo(false);
  const handleShowHomeVideo = () => setShowVideo(true);

  const [showEvent, setShowEvent] = useState(false);
  const handleCloseHomeEvent = () => setShowEvent(false);
  const handleShowHomeEvent = () => setShowEvent(true);

  // const handleDelete = () => dispatch(deleteUserPost(postId));

  return (
    <React.Fragment>
      <Container className="mt-4 mb-5">
        <Row>
          {/* COLONNA SINISTRA */}
          <Col md={3}>
            <div className="homeProfile">
              <div className="coverProfile text-center">
                <Image src={coverImg} className="img-fluid" />
              </div>
              <div className="headerProfile text-center">
                <Image src={myProfile.image} width={60} height={60} className="imgProfile" />
                <Link to={`/profile/${myProfile._id}`}>
                  <h6>
                    {myProfile.name} {myProfile.surname}
                  </h6>
                  <p>{myProfile.title}</p>
                </Link>
              </div>
              <div className="linkProfile">
                <p className="d-flex justify-content-between align-items-center">
                  <span>Collegamenti</span>
                  <span>92</span>
                </p>
                <p>Espandi la tua rete</p>
                <p className="d-flex justify-content-between align-items-center">
                  <span>Chi ha visitato il tuo profilo?</span>
                  <span>9</span>
                </p>
              </div>
              <div className="premiumProfile">
                <p>Accedi a strumenti e informazioni in esclusiva</p>
                <p>Prova Premium gratis</p>
              </div>
              <div className="footerProfile d-flex">
                <BookmarkFill className="me-1 text-secondary" />
                <p>I miei elementi</p>
              </div>
            </div>
            <div className="homeProfile text-center mt-3 sticky-top">
              <div className="d-flex flex-column align-items-start ms-3 my-2">
                <Link className="my-2">Gruppi</Link>
                <Link className="my-2">
                  Eventi <Plus />
                </Link>
                <Link className="my-2">Hashtag seguiti</Link>
                <div className="d-flex justify-content-center mx-auto">
                  <Button variant="white" className="d-flex text-secondary align-items-center">
                    Scopri di più
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          {/* COLONNA CENTRALE */}
          <Col md={6}>
            {/* AVVIA UN POST */}
            <div className="bg-white border rounded">
              <div className="m-3">
                <div className="d-flex mb-3">
                  <Link>
                    <div className="m-2">
                      <img
                        id="avatar"
                        src={myProfile.image}
                        alt="Avatar"
                        className="rounded-circle"
                        onClick={navigateHomePage}
                      />
                    </div>
                  </Link>
                  <Button className="border" variant="light" onClick={handleShowHome}>
                    <span className="text-secondary">Avvia un post</span>
                  </Button>
                  <ModalHome show={show} handleCloseHome={handleCloseHome} />
                </div>
                <div>
                  <Button variant="white" className="p-0 mx-2" onClick={handleShowHomeImg}>
                    <Images className="text-primary" />
                    <span className="mx-2 text-secondary">Foto</span>
                  </Button>
                  <ModalHomeImg showImg={showImg} handleCloseHomeImg={handleCloseHomeImg} />
                  <Button variant="white" className="p-0 mx-2" onClick={handleShowHomeVideo}>
                    <PlayBtnFill className="text-success" />
                    <span className="mx-2 text-secondary">Video</span>
                  </Button>
                  <ModalHomeVideo showVideo={showVideo} handleCloseHomeVideo={handleCloseHomeVideo} />
                  <Button variant="white" className="p-0 mx-2" onClick={handleShowHomeEvent}>
                    <CalendarDate className="text-warning" />
                    <span className="mx-2 text-secondary">Evento</span>
                  </Button>
                  <ModalHomeEvent showEvent={showEvent} handleCloseHomeEvent={handleCloseHomeEvent} />
                  <Button variant="white" className="p-0 mx-2">
                    <CardText className="text-danger" />
                    <span className="mx-2 text-secondary">Scrivi un articolo</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* ORDINA PER... */}
            <Row className="align-items-center">
              <Col xs={8}>
                <hr></hr>
              </Col>
              <Col xs={4} className="text-center fs-6">
                Ordina per: principali
              </Col>
            </Row>

            {/* POSTS */}
            {posts &&
              posts.slice(0, 15).map(post => (
                <React.Fragment key={post._id}>
                  <div className="bg-white border rounded mt-1 post">
                    <div className="m-3">
                      <div className="d-flex mb-3">
                        {post.user.image && (
                          <Image
                            src={post.user.image}
                            width={60}
                            height={60}
                            alt="1"
                            className="imgProfile rounded-circle me-2"
                          />
                        )}
                        <div>
                          <Link>{post.user.name}</Link>
                          <p>8.118 follower</p>
                          {/* <p>Post sponsorizzato</p> */}
                        </div>
                        <Button className="ms-auto" variant="white">
                          <ThreeDots />
                        </Button>
                      </div>
                      <p>{post.text}</p>
                      {/* <div> */}
                      {post.image && (
                        <div>
                          <Image className="img-fluid" src={post.image} />
                        </div>
                      )}
                      {/* <div>
                        <Image src={post.image} />
                      </div> */}
                      {/* <div>
                          <Link>acquatechrade.com</Link>
                          <br />
                          <span className="me-5">Acquatech China: 5-7 June 2023</span>
                          <Button className="ms-5">Scopri di più</Button>
                        </div> */}
                      {/* </div> */}
                      <div className="d-flex align-items-center">
                        <HandThumbsUp className="me-1" />
                        <span>36</span>
                        {/* <HandThumbsUp className="me-5" /> */}
                        {/* <span className="ms-5">1 diffusione post</span> */}
                      </div>
                      <hr></hr>
                      <div>
                        <Button variant="white">
                          <HandThumbsUp />
                          <span className="mx-2">Consiglia</span>
                        </Button>
                        <Button variant="white">
                          <ChatText />
                          <span className="mx-2">Commenta</span>
                        </Button>
                        <Button variant="white">
                          <ArrowsFullscreen />
                          <span className="mx-2">Diffondi il post</span>
                        </Button>
                        <Button variant="white">
                          <SendFill />
                          <span className="mx-2">Invia</span>
                        </Button>
                      </div>
                      {/* <p>ℹ️ Scrivi il tuo primo commento</p> */}
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </Col>

          {/* COLONNA DESTRA */}
          <Col md={3} id="aside-news">
            <div className="mx-1">
              <div className="mx-1 bg-white border rounded px-3">
                <div className="mt-2">
                  <Link>
                    Linkedin Notizie <span className="ms-5">ℹ️</span>
                  </Link>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Le top Companies del 2023 in Italia
                        </div>
                        <Badge bg="light" text="secondary">
                          Notizie principali - 964 lettori
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          L'importanza di mettersi in ascolto
                        </div>
                        <Badge bg="light" text="secondary">
                          2 giorni fa
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Che cosa succede al Salone del Mobile
                        </div>
                        <Badge bg="light" text="secondary">
                          18 ore fa - 460 lettori
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Un nuovo modello contrattuale per la banca intesa san paolo
                        </div>
                        <Badge bg="light" text="secondary">
                          1 giorno fa
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Tassi sui mutui al 4%
                        </div>
                        <Badge bg="light" text="secondary">
                          22 ore fa - 332 lettori
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Apple sfida le banche
                        </div>
                        <Badge bg="light" text="secondary">
                          3 minuti fa - 284 lettori
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Frena il venture capital
                        </div>
                        <Badge bg="light" text="secondary">
                          1 giorno fa
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Ucraina: gli ultimi aggiornamenti
                        </div>
                        <Badge bg="light" text="secondary">
                          1 giorno fa - 436 lettori
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          L'importanza di mettersi in ascolto
                        </div>
                        <Badge bg="light" text="secondary">
                          2 giorni fa
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="text-dark">
                        <div className="d-flex">
                          <span className="me-1">
                            <Dot />
                          </span>
                          Arrivano i tutor in classe
                        </div>
                        <Badge bg="light" text="secondary">
                          21 ore fa
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                  <Button variant="light" className="text-secondary">
                    Visualizza altro <CaretDown />
                  </Button>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <footer className="my-5 mx-2 d-flex flex-row">
                <Container className="p-0">
                  <div className="">
                    <Col className="p-0 d-flex flex-wrap justify-content-center">
                      {/* rgb(156 156 154) colore testo */}
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Informazioni
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Accessibilità
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Centro assistenza
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        <NavDropdown
                          className="text-secondary"
                          id="nav-dropdown-dark-example"
                          title="Privacy e condizioni"
                          menuVariant="secondary"
                        >
                          <NavDropdown.Item href="#action/3.1" className="fw-bold">
                            Informativa sulla privacy
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className="fw-bold">
                            Contratto di licenza
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className="fw-bold">
                            Informativa sui cookie
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4" className="fw-bold">
                            Informativa sul copyright
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Opzioni per gli annunci pubblicitari
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Pubblicità
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        <NavDropdown
                          className="text-secondary"
                          id="nav-dropdown-dark-example"
                          title="Servizi alle aziende"
                          menuVariant="secondary"
                        >
                          <NavDropdown.Item href="#action/3.1" className="fw-bold">
                            Talent Solutions
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className="fw-bold">
                            Sales Solutions
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className="fw-bold">
                            Pubblica offerta di lavoro gratuita
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4" className="fw-bold">
                            Marketing Solutions
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Scarica l'app Linkedin
                      </Link>
                      <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                        Altro
                      </Link>
                      <Row className="mt-3">
                        <Col className="text-secondary">
                          <Image src={LinkedinLogo} alt="lnk-logo" width={80} height={40} className="bg-light"></Image>
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
    </React.Fragment>
  );
};

export default Home;
