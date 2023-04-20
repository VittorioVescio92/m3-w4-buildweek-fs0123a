import { Button, Form, Modal } from "react-bootstrap";
import avatar from "../../avatar.png";
import { useSelector } from "react-redux";
import { ChatText, Clock, EmojiSmile, FileEarmarkText, GlobeAmericas, Image, PlayBtnFill, ThreeDots } from "react-bootstrap-icons";
import { useState } from "react";

const ModalHome = ({ show, handleCloseHome }) => {
  const user = useSelector((state) => state.myProfile.content);

  const [post, setPost] = useState("");

  // useEffect(() => {
  //   if (id) {
  //     const post = userPosts.find((post) => post._id === id);

  //     setText(post.text);
  //   }
  // }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formPost = {
      text: text,
    };
    id ? dispatch(putUserPost(id, JSON.stringify(formPost))) : dispatch(postUserPost(id, JSON.stringify(formPost)));
  };

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
            <img src={user.image} alt="" width={50} className="rounded-pill" />
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                {/* <Form.Control type="text" placeholder="Di cosa vorresti parlare?" /> */}
                <Form.Control as="textarea" value={post} onChange={(e) => setPost(e.target.value)} placeholder="Di cosa vorresti parlare?" aria-label="With textarea" />
              </Form.Label>
            </Form.Group>
          </Form>
          {/* <div className="form-floating my-3">
            <input type="text" className="form-control p-0 border-white" id="floatingInput" placeholder="Di cosa vorresti parlare?" value={} onChange={} />
            <input type="text" className="form-control p-0 border-white" id="floatingInput" placeholder="Di cosa vorresti parlare?" />
            <label className="p-0">Di cosa vorresti parlare?</label>
          </div> */}
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
            <Button variant="secondary" className="mx-1">
              Pubblica
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHome;
