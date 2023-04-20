import { Button, Col, Container, Row, Image } from "react-bootstrap";
import ModalHome from "./home/ModalHome";
import ModalHomeImg from "./home/ModalHomeImg";
import ModalHomeEvent from "./home/ModalHomeEvent";
import ModalHomeVideo from "./home/ModalHomeVideo";
// import avatar from "../avatar.png";
import { ArrowsFullscreen, CalendarDate, CardText, ChatText, HandThumbsUp, PlayBtnFill, SendFill, ThreeDots } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyProfileAction, getPostsAction } from "../redux/actions";
import coverImg from "../assets/img/cover.jpeg";

const Home = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.content);
  const posts = useSelector((state) => state.posts.content);

  useEffect(() => {
    dispatch(getMyProfileAction());
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Container className="mt1">
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
              <div className="footerProfile">
                <p>I miei elementi</p>
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
                      <img id="avatar" src={myProfile.image} alt="Avatar" className="rounded-circle" onClick={navigateHomePage} />
                    </div>
                  </Link>
                  <Button className="border" variant="light" onClick={handleShowHome}>
                    <span className="text-secondary">Avvia un post</span>
                  </Button>
                  <ModalHome show={show} handleCloseHome={handleCloseHome} />
                </div>
                <div>
                  <Button variant="white" className="p-0 mx-2" onClick={handleShowHomeImg}>
                    <Image className="text-primary" />
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
              posts.map((post) => (
                <>
                  <div className="bg-white border rounded mt-3 post" key={post._id}>
                    <div className="m-3">
                      <div className="d-flex mb-3">
                        <Image src={post.user.image} width={60} height={60} alt="1" className="imgProfile rounded-circle me-2" />
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
                      {post.image ? (
                        <div>
                          <Image src={post.image} />
                        </div>
                      ) : null}
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
                </>
              ))}
          </Col>

          {/* COLONNA DESTRA */}
          <Col md={3} className="">
            Testo
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
