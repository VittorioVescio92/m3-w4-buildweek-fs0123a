import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container className="d-flex flex-row align-items-start my-5">
      <Container className="m-0 d-flex">
        <Row className="d-flex flew-wrap justify-content-start align-items-start">
          <Row className="mb-2">
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
          </Row>
          <Row className="mb-2">
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
          <Row className="mb-2">
            <Col>
              <Link to="#" className="text-decoration-none text-secondary">
                Centro sicurezza
              </Link>
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
          <Row className="mb-2">
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
          <Row className="mb-2">
            <Col>
              <NavDropdown
                className="text-secondary"
                id="nav-dropdown-dark-example"
                title="Privacy e condizioni"
                menuVariant="secondary"
              >
                <NavDropdown.Item href="#action/3.1" className="fw-bold">
                  Informativa sulla privacy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="fw-bold">
                  Contratto di licenza
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="fw-bold">
                  Informativa sui cookie
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="fw-bold">
                  Informativa sul copyright
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary">
              Linkedin Corporation &copy; 2023
            </Col>
          </Row>
        </Row>
      </Container>

      <Container className="m-0">
        <Col>
          <QuestionCircleFill className="mx-2 text-secondary" />
          <Link to="#" className="text-decoration-none text-secondary fw-bold">
            Domande?
          </Link>
          <p className="text-secondary">Visita il nostro Centro assistenza.</p>
        </Col>

        <Col>
          <GearFill className="mx-2 text-secondary" />
          <Link to="#" className="text-decoration-none text-secondary fw-bold">
            Gestisci il tuo account e la tua privacy
          </Link>
          <p className="text-secondary">Vai alle impostazioni</p>
        </Col>
        <Col>
          <ShieldShaded className="mx-2 text-secondary" />
          <Link to="#" className="text-decoration-none text-secondary fw-bold">
            Trasparenza sui contenuti consigliati
          </Link>
          <p className="text-secondary">
            Scopri di più sui contenuti consigliati.
          </p>
        </Col>
      </Container>

      <Container className="m-0">
        <Col>
          <span className="text-secondary">Seleziona lingua</span>
          <DropdownButton
            variant="light border-dark rounded text-secondary"
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
