import { Button, Modal } from "react-bootstrap";
import avatar from "../../avatar.png";
import { useSelector } from "react-redux";
import {
  ChatText,
  Clock,
  EmojiSmile,
  FileEarmarkText,
  GlobeAmericas,
  Image,
  PlayBtnFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { useState } from "react";

const ModalHome = ({ show, handleCloseHome }) => {
  const user = useSelector(state => state.myProfile.content);
  const endPoint = "https://striveschool-api.herokuapp.com/api/posts/";
  const [post, setPost] = useState({
    text: "",
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPost(prevState => ({
      ...prevState,
      text: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(JSON.stringify(post));
    if (post.text === "") {
      setPost.text = "null";
    }
    fetch(endPoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(post),
    })
      .then(response => {
        if (response.ok) {
          handleCloseHome();
        } else {
          throw new Error("Errore durante l'invio dei dati");
        }
      })
      .catch(error => console.log(error));
  };
  console.log(post);
  return (
    <>
      <Modal show={show} onHide={handleCloseHome}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Crea un post</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <img src={avatar} alt="" width={50} className="rounded-pill" />
            <h3 className="me-auto">
              {user.name} {user.surname}
            </h3>
            <div className="ms-auto">
              <Button variant="white border-dark" className="ms-auto">
                <GlobeAmericas className="mx-2" />
                <span>Chiunque</span>
              </Button>
            </div>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control p-0 border-white"
              id="floatingInput"
              onChange={handleInputChange}
            />
            <label className="p-0">Di cosa vorresti parlare?</label>
          </div>
          <Button variant="white">
            <EmojiSmile />
          </Button>
          <div>
            <Button variant="light" className="p-0">
              <Image className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <PlayBtnFill className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <FileEarmarkText className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <ThreeDots className="text-secondary mx-2" />
            </Button>
            <span className="text-secondary">|</span>
            <Button variant="light" className="p-0 me-5">
              <ChatText className="text-secondary mx-2" />
              <span className="text-secondary">Tutti</span>
            </Button>
            <Button variant="light" className="p-0 ms-5">
              <Clock className="text-secondary ms-auto" />
            </Button>
            <Button variant="secondary" className="mx-1" onClick={handleSubmit}>
              Pubblica
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHome;
