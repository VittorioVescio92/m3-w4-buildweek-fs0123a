/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import InformationsComponent from "./InformationsComponent";
import KeyPointsComponent from "./KeyPointsComponent";
import ProfileComponent from "./ProfileComponent";
import SideComponent from "./SideComponent";
import PeopleComponent from "./PeopleComponent";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfileComponent />
          </Col>
          <SideComponent />
          <PeopleComponent />
        </Row>
      </Container>
    </>
  );
};
export default MainComponent;
