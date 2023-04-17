import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownType from "react-bootstrap/DropdownType";
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container fluid="md" className="d-flex flex-row align-items-start">
      <Container className="m-0 d-flex">
        <Row className="d-flex flew-wrap justify-content-start align-items-start">
          <Col>
            <Link to="#" className="">
              Informazioni
            </Link>
          </Col>
          <Col>
            <Link to="#">Accessibilità</Link>
          </Col>
          <Col>
            <Link to="#">Talent Solutions</Link>
          </Col>
          <Row>
            <Col>
              <Link to="#">Linee guida della community</Link>
            </Col>
            <Col>
              <Link to="#">Carriera</Link>
            </Col>
            <Col>
              <Link to="#">Soluzioni di marketing</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#">Privacy e condizioni</Link>
              {/* <DropdownType
                // as={ButtonGroup}
                // key={idx}
                // id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Privacy e condizioni"
              >
                <Dropdown.Item as="button">English</Dropdown.Item>
                <Dropdown.Item as="button">Deutsch</Dropdown.Item>
                <Dropdown.Item as="button">Espanol</Dropdown.Item>
              </DropdownType> */}
            </Col>
            <Col>
              <Link to="#">Opzioni per gli annunci pubblicitari</Link>
            </Col>
            <Col>
              <Link to="#">Pubblicità</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#">Sales Solutions</Link>
            </Col>
            <Col>
              <Link to="#">Mobile</Link>
            </Col>
            <Col>
              <Link to="#">Piccole Imprese</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#">Centro sicurezza</Link>
            </Col>
          </Row>
          <Row>
            <Col>Linkedin Corporation &copy; 2023</Col>
          </Row>
        </Row>
      </Container>

      <Container className="m-0">
        <Col>
          <QuestionCircleFill />
          <Link to="#">Domande?</Link>
          <p>Visita il nostro Centro assistenza.</p>
        </Col>

        <Col>
          <GearFill />
          <Link to="#">Gestisci il tuo account e la tua privacy</Link>
          <p>Vai alle impostazioni</p>
        </Col>
        <Col>
          <ShieldShaded />
          <Link to="#">Trasparenza sui contenuti consigliati</Link>
          <p>Scopri di più sui contenuti consigliati.</p>
        </Col>
      </Container>

      <Container className="m-0">
        <Col>
          <span>Seleziona lingua</span>
          <DropdownButton
            id="dropdown-item-button"
            title="Italiano (Italiano) "
          >
            <Dropdown.Item as="button">English</Dropdown.Item>
            <Dropdown.Item as="button">Deutsch</Dropdown.Item>
            <Dropdown.Item as="button">Espanol</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Container>
    </Container>
  );
};

export default MyFooter;
