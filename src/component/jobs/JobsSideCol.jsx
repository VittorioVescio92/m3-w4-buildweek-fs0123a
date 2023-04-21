import { Col, Container, Image, NavDropdown, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinkedinLogo from "../../assets/img/linkedin-logo.png";

const JobsSideCol = () => {
  const myProfile = useSelector(state => state.myProfile.content.image);
  console.log(myProfile);

  return (
    <Col md={3}>
      <div className="bg-white border rounded mt-3 p-3">
        <div>
          <h6 className="m-0">Disponibile a lavorare</h6>
          <span className="fw-light">Consigliato in base alla tua attività</span>
        </div>
        <div className="d-flex mt-3 bg-light">
          <Link className="d-flex align-items-center">
            <span className="text-dark">Mostra ai recruiter che sei disponibile per nuove opportunità di lavoro</span>
            <Image
              src={myProfile}
              alt=""
              width={80}
              height={80}
              // per far coincidere la frase identica all'originale fare 40 e 40
              className="rounded-circle"
            ></Image>
          </Link>
        </div>
        <p className="mt-3">
          Ricevi più messaggi InMail dai recruiter con la cornice #OpenToWork: controlli tu chi la vede
        </p>
        <Link className="text-secondary">
          Inizia
          <ArrowRight className="ms-2" />
        </Link>
      </div>
      <div className="d-flex">
        <footer className="my-5 mx-2 d-flex flex-row">
          <Container className="p-0">
            <div className="">
              <Col className="p-0 d-flex flex-wrap justify-content-center">
                {/* rgb(156 156 154) colore testo */}
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Informazioni
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Accessibilità
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Centro assistenza
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
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
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Opzioni per gli annunci pubblicitari
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Pubblicità
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  <NavDropdown
                    className="text-secondary"
                    id="nav-dropdown-dark-example"
                    title="Servizi alle aziende"
                    menuVariant="secondary"
                  >
                    <NavDropdown.Item href="#action/3.1" className="fw-bold">
                      Talent Solutions
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="fw-bold">
                      Sales Solutions
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="fw-bold">
                      Pubblica offerta di lavoro gratuita
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="fw-bold">
                      Marketing Solutions
                    </NavDropdown.Item>
                  </NavDropdown>
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Scarica l'app Linkedin
                </Link>
                <Link to="#" className="mx-2 text-decoration-none text-secondary fw-light">
                  Altro
                </Link>
                <Row className="mt-3">
                  <Col>
                    <Image src={LinkedinLogo} alt="lnk-logo" width={80} height={40} className="bg-light"></Image>
                    Linkedin Corporation &copy; 2023
                  </Col>
                </Row>
              </Col>
            </div>
          </Container>
        </footer>
      </div>
    </Col>
  );
};
export default JobsSideCol;
