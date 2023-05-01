import { Button, Col, Container, Image, Row } from "react-bootstrap";
// import { Link } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
// import ModalPost from "./ModalPost";
import { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const PostsProfileComponent = () => {
  const posts = useSelector(state => state.posts.content);
  const user = useSelector(state => state.selectedProfile.content);

  const userPosts = posts.filter(post => post.user._id === user._id);
  console.log(userPosts);

  const navigate = useNavigate();
  const navigateToPost = () => {
    navigate(`/posts/${user._id}`);
    window.scrollTo(0, 0);
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Container className="mt-2 p-0">
      <Row>
        <Col>
          <section className="rounded-3 border-dark profile p-3">
            <h3>Posts</h3>
            {userPosts &&
              userPosts.map(post => (
                // <div className="post" onClick={handleShow}>
                <div className="post">
                  <p>
                    <span className="fs-6">Pubblicato da: </span>
                    <span className="fs-6">
                      {post.user.name} {post.user.surname}
                    </span>
                    <span className="fs-6"> - {new Date(post.createdAt).toLocaleDateString()}</span>
                  </p>
                  <div className="d-flex post-body p-2">
                    <div className="me-3">
                      <Image width={60} height={60} src={post.user.image} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="fs-5">{post.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            {/* <ModalPost show={show} handleCloseHome={handleClose} /> */}
            <div className="d-flex justify-content-center">
              <Button onClick={navigateToPost} variant="white" className="d-flex text-secondary align-items-center">
                Mostra tutti i posts ({userPosts.length})
                <ArrowRight className="ms-2" />
              </Button>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default PostsProfileComponent;
