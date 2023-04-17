/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import InformationsComponent from "./InformationsComponent";
import KeyPointsComponent from "./KeyPointsComponent";
import ProfileComponent from "./ProfileComponent";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfileComponent />
          </Col>
        </Row>
      </Container>
      <KeyPointsComponent />
      <InformationsComponent />
    </>
  );
};
export default MainComponent;
