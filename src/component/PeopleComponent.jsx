import { Button, Col } from "react-bootstrap";
import avatar from "../avatar.png";
import { PersonAdd } from "react-bootstrap-icons";

const PeopleComponent = () => {
  return (
    <section id="people" className="bg-white rounded-5 mt-2 p-4">
      <h3 className="fs-5">Persone che potresti conoscere</h3>
      <div className="d-flex justify-content-center border-bottom mt-3">
        <div>
          <img src={avatar} alt="avatar" className="img-fluid sideImg rounded-circle" />
        </div>
        <div className="ms-2">
          <h3 className="fs-5 mb-0">Utente 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa?</p>
          <Button variant="outline-secondary mb-3">
            <PersonAdd />
            Collegati
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center border-bottom mt-3">
        <div>
          <img src={avatar} alt="avatar" className="img-fluid sideImg rounded-circle" />
        </div>
        <div className="ms-2">
          <h3 className="fs-5 mb-0">Utente 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa?</p>
          <Button variant="outline-secondary mb-3">
            <PersonAdd />
            Collegati
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center border-bottom mt-3">
        <div>
          <img src={avatar} alt="avatar" className="img-fluid sideImg rounded-circle" />
        </div>
        <div className="ms-2">
          <h3 className="fs-5 mb-0">Utente 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa?</p>
          <Button variant="outline-secondary mb-3">
            <PersonAdd />
            Collegati
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center border-bottom mt-3">
        <div>
          <img src={avatar} alt="avatar" className="img-fluid sideImg rounded-circle" />
        </div>
        <div className="ms-2">
          <h3 className="fs-5 mb-0">Utente 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa?</p>
          <Button variant="outline-secondary mb-3">
            <PersonAdd />
            Collegati
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center border-bottom mt-3">
        <div>
          <img src={avatar} alt="avatar" className="img-fluid sideImg rounded-circle" />
        </div>
        <div className="ms-2">
          <h3 className="fs-5 mb-0">Utente 5</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa?</p>
          <Button variant="outline-secondary mb-3">
            <PersonAdd />
            Collegati
          </Button>
        </div>
      </div>
    </section>
  );
};
export default PeopleComponent;
