import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import avatar from "../avatar.png";
import {
  CalendarDate,
  CardText,
  Image,
  PlayBtnFill,
} from "react-bootstrap-icons";

const Home = () => {
  const navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Button onClick={navigateHomePage}></Button>
      <h1>provaaaaaaa</h1>
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
            <Button className="border" variant="light">
              {/* onclick modale */}
              <span className="text-secondary">Avvia un post</span>
            </Button>
          </div>
          <div>
            <Button variant="white" className="p-0 mx-2">
              <Image className="text-primary" />
              <span className="mx-2 text-secondary">Foto</span>
            </Button>
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
      </Container>
      {/* <div className="d-flex">
        <span>
          <hr></hr>
          ordina
        </span>
      </div> */}
    </>
  );
};

export default Home;
