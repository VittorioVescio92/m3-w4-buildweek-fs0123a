import { Button, Col, Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PostCard from "./profile/PostCard";
// import PostCard from "./profile/PostCard";

const Posts = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.content);
  const user = useSelector((state) => state.selectedProfile.content);
  const userPosts = posts.filter((post) => post.user._id === user._id);

  const params = useParams();

  // console.log(posts);
  // console.log(user);
  // console.log(userPosts);

  const navigateToProfile = () => {
    navigate(`/profile/${params.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* {userPosts && ( */}
      <Container className="mt-2 p-0 postsPage">
        <Row>
          <Col md={9}>
            <section className="mt-4 rounded-3 border-dark profile p-3">
              <div className="d-flex">
                <div className="d-flex justify-content-start align-items-center">
                  <Button variant="light" onClick={navigateToProfile} className="rounded-pill my-2">
                    <ArrowLeft className="fs-2" />
                  </Button>
                  <h3 className="ms-3">Posts</h3>
                </div>
              </div>
              {userPosts && userPosts.map((post) => <PostCard key={post._id} post={post} />)}
              {/* {userPosts && userPosts.map((post) => console.log(post))} */}
            </section>
          </Col>
          <Col md={3} className="aside">
            <Aside />
          </Col>
        </Row>
      </Container>
      {/* )} */}
    </>
  );
};

export default Posts;
