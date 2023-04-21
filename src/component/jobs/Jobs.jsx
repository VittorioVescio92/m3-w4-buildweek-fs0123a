import { Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";

import JobsOptions from "./JobsOptions";
import JobsOffers from "./JobsOffers";
import JobsSideCol from "./JobsSideCol";

const Jobs = () => {
  const myProfile = useSelector(state => state.myProfile.content.image);
  console.log(myProfile);

  return (
    <>
      <Container className="mt-2 mb-5">
        <Row>
          {/* COLONNA SINISTRA */}
          <JobsOptions />

          {/* COLONNA CENTRALE */}
          <JobsOffers />

          {/* COLONNA DESTRA */}
          <JobsSideCol />
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
