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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const navigate = useNavigate();

  const user = useSelector(state => state.myProfile.content);

  const navigateBack = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const navigateJobs = () => {
    navigate("/jobs");
    window.scrollTo(0, 0);
  };

  return (
    <Navbar bg="dark" expand="lg" className="py-0 d-flex justify-content-center">
      <Col xs={8} className="mb-1">
        <Container className="d-flex align-items-center px-0">
          <Navbar.Brand href="#" className="p-0 d-block">
            <Linkedin className="text-light fs-1" onClick={navigateBack} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="ml-auto">
              <FormControl type="text" placeholder="cerca" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>

          <div className="px-4 fs-4 text-center nav-item-col" onClick={navigateBack}>
            {/* <Link to={`/`}> */}
            <HouseDoorFill />
            <p className=" fs-6 m-0">Home</p>
            {/* </Link> */}
          </div>

          <div className="px-4 fs-4 text-center nav-item-col">
            <PersonLinesFill />
            <p className=" fs-6 m-0">Rete</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col" onClick={navigateJobs}>
            <BriefcaseFill />
            <p className=" fs-6 m-0">Lavoro</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <ChatDotsFill />
            <p className=" fs-6 m-0">Messaggistica</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <BellFill />
            <p className=" fs-6 m-0">Notifiche</p>
          </div>
          <div className="px-4 fs-4 text-center nav-item-col">
            <img id="avatar" src={user.image} alt="Avatar" className="rounded-circle" />
            <div className=" fs-6 m-0">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Tu"
                menuVariant="dark"
                className="text-center"
                align={{ lg: "end" }}
              >
                <NavDropdown.Item>
                  <div className="d-flex justify-content-center">
                    <div className="me-3 d-flex align-items-center">
                      <img id="avatar-big" src={user.image} alt="Avatar" className="rounded-circle" />
                    </div>
                    <div>
                      <h3 className="fs-4">
                        {user.name} {user.surname}
                      </h3>
                      <p>{user.title}</p>
                    </div>
                  </div>
                  <button className="rounded-5 text-center flex-grow-1">
                    <Link to={`/profile/${user._id}`}>Visualizza Profilo</Link>
                  </button>
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
            </div>
          </div>

          <div className="ps-4 fs-4 text-center border-start border-white-50 nav-item-col">
            <Building />
            <div className="fs-6">
              <NavDropdown id="nav-dropdown-dark-example" title="Per le aziende" menuVariant="dark"></NavDropdown>
            </div>
          </div>
        </Container>
      </Col>
    </Navbar>
  );
};
export default MyNavbar;
