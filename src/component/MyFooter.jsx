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
            {/* rgb(156 156 154) colore testo */}
            <Link to="#" className="text-decoration-none text-secondary">
              Informazioni
            </Link>
          </Col>
          <Col>
            <Link to="#" className="text-decoration-none text-secondary">
              Accessibilità
            </Link>
          </Col>
          <Col>
            <Link to="#" className="text-decoration-none text-secondary">
              Talent Solutions
            </Link>
          </Col>
          <Row>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Linee guida della community
              </Link>
            </Col>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Carriera
              </Link>
            </Col>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Soluzioni di marketing
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Privacy e condizioni
              </Link>
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
              <Link to="#" className="text-decoration-none text-secondary">
                Opzioni per gli annunci pubblicitari
              </Link>
            </Col>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Pubblicità
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Sales Solutions
              </Link>
            </Col>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Mobile
              </Link>
            </Col>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Piccole Imprese
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Centro sicurezza
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>Linkedin Corporation &copy; 2023</Col>
          </Row>
        </Row>
      </Container>

      <Container className="m-0">
        <Col>
          <QuestionCircleFill className="mx-2" />
          <Link to="#" className="text-decoration-none text-secondary">
            Domande?
          </Link>
          <p>Visita il nostro Centro assistenza.</p>
        </Col>

        <Col>
          <GearFill className="mx-2" />
          <Link to="#" className="text-decoration-none text-secondary">
            Gestisci il tuo account e la tua privacy
          </Link>
          <p>Vai alle impostazioni</p>
        </Col>
        <Col>
          <ShieldShaded className="mx-2" />
          <Link to="#" className="text-decoration-none text-secondary">
            Trasparenza sui contenuti consigliati
          </Link>
          <p>Scopri di più sui contenuti consigliati.</p>
        </Col>
      </Container>

      <Container className="m-0">
        <Col>
          <span>Seleziona lingua</span>
          <DropdownButton
            variant="light"
            className=""
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
