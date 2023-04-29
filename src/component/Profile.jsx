/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import ProfileMain from "./profile/ProfileMain";
import Aside from "./Aside";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9} className="profile mt-4 rounded-2">
            <ProfileMain />
          </Col>
          <Col md={3} className="aside">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
