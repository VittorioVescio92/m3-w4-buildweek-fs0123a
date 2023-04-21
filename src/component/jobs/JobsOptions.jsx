import { Button, Col, ListGroup } from "react-bootstrap";
import { BellFill, BookmarkFill, Clipboard2Check, GearFill, PencilSquare, PlayBtnFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsOptions = () => {
  return (
    <Col md={3}>
      <div className="sticky-top">
        <div className="bg-white border rounded mt-3">
          <ListGroup className="my-3" variant="flush">
            <ListGroup.Item>
              <Link className="text-dark">
                <div className="d-flex">
                  <span className="me-1">
                    <BookmarkFill className="me-2 fs-5 text-secondary" />
                  </span>
                  Le mie offerte di lavoro
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="text-dark">
                <div className="d-flex">
                  <span className="me-1">
                    <BellFill className="me-2 fs-5 text-secondary" />
                  </span>
                  Avvisi offerte di lavoro
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="text-dark">
                <div className="d-flex">
                  <span className="me-1">
                    <Clipboard2Check className="me-2 fs-5 text-secondary" />
                  </span>
                  Valutazioni delle competenze
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="text-dark">
                <div className="d-flex">
                  <span className="me-1">
                    <PlayBtnFill className="me-2 fs-5 text-secondary" />
                  </span>
                  Indicazioni per chi cerca lavoro
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="text-dark">
                <div className="d-flex">
                  <span className="me-1">
                    <GearFill className="me-2 fs-5 text-secondary" />
                  </span>
                  Impostazioni candidatura
                </div>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Button variant="light" className="m-3 border border-primary">
          <div className="d-flex">
            <div>
              <PencilSquare className="text-primary me-4 my-3 fs-3" />
            </div>
            <span className="text-primary fw-bold mt-2">Pubblica offerta gratuita</span>
          </div>
        </Button>
      </div>
    </Col>
  );
};
export default JobsOptions;
