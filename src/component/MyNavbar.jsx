import { Col, Container, Form, FormControl, NavDropdown, Navbar } from "react-bootstrap";
import {
  HouseDoorFill,
  Linkedin,
  PersonLinesFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Building,
} from "react-bootstrap-icons";
import avatar from "../avatar.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="py-0 d-flex justify-content-center">
      <Col xs={8}>
        <Container className="d-flex align-items-center px-0">
          <Navbar.Brand href="#home">
            <Linkedin className="text-light fs-1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <FormControl type="text" placeholder="cerca" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
          <div className="px-4 fs-4 text-center nav-item-col">
            <HouseDoorFill />
            <p className=" fs-6">Home</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <PersonLinesFill />
            <p className=" fs-6">Rete</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <BriefcaseFill />
            <p className=" fs-6">Lavoro</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <ChatDotsFill />
            <p className=" fs-6">Messaggistica</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <BellFill />
            <p className=" fs-6">Notifiche</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <img id="avatar" src={avatar} alt="Avatar" className="rounded-circle" />
            <p className=" fs-6">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Tu"
                menuVariant="dark"
                className="text-center"
                align={{ lg: "end" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  <div className="d-flex justify-content-center">
                    <div className="me-3 d-flex align-items-center">
                      <img id="avatar-big" src={avatar} alt="Avatar" className="rounded-circle" />
                    </div>
                    <div>
                      <h3 className="fs-4">Ajeje Brazorv</h3>
                      <p>Full Stack Development student presso Epicode Italia</p>
                    </div>
                  </div>
                  <button className="rounded-5 text-center flex-grow-1">Visualizza Profilo</button>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <h3 className="fs-4">Account</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Impostazioni e Privacy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Guida</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lingua</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <h3 className="fs-4">Gestisci</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Post e Attività</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Account per pubblicazione offerte</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Esci</NavDropdown.Item>
              </NavDropdown>
            </p>
          </div>

          <div className="ps-4 fs-4 text-center border-start border-white-50 nav-item-col">
            <Building />
            <p className="fs-6">
              <NavDropdown id="nav-dropdown-dark-example" title="Per le aziende" menuVariant="dark"></NavDropdown>
            </p>
          </div>
        </Container>
      </Col>
    </Navbar>
  );
};
export default MyNavbar;
