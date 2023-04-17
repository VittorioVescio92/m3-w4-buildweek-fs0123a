import { Col, Container, Form, FormControl, Navbar } from "react-bootstrap";
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
        <Container className="d-flex align-items-center">
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
            <p className=" fs-6">Tu</p>
          </div>
          <div className="ps-4 fs-4 text-center border-start border-white-50 nav-item-col">
            <Building />
            <p className=" fs-6">Per le Aziende</p>
          </div>
        </Container>
      </Col>
    </Navbar>
  );
};
export default MyNavbar;
