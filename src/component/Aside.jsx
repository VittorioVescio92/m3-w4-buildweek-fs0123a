import { Col, Row } from "react-bootstrap";
import AsideSeenProfiles from "./aside/AsideSeenProfiles";
import AsideKnowProfiles from "./aside/AsideKnowProfiles";

const Aside = () => {
  return (
    <Row>
      <Col xs={12}>
        <AsideSeenProfiles />
        <AsideKnowProfiles />
      </Col>
    </Row>
  );
};
export default Aside;
