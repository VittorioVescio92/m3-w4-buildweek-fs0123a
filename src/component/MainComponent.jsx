/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import InformationsComponent from "./InformationsComponent";
import KeyPointsComponent from "./KeyPointsComponent";
import ProfileComponent from "./ProfileComponent";
import SideComponent from "./SideComponent";
import PeopleComponent from "./PeopleComponent";
import { Link } from "react-router-dom";
import ExperienceComponents from "./ExperienceComponents";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfileComponent />
            <KeyPointsComponent />
            <InformationsComponent />
            <ExperienceComponents />
          </Col>
          <Col md={3}>
            <SideComponent />
            <PeopleComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainComponent;
