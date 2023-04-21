import { Button, Image } from "react-bootstrap";
import { ArrowRight, Bookmark, Bullseye, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import avatar from "../../avatar.png";
const JobOffer = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Image src={avatar} alt="" width={50} className="me-3"></Image>
        </div>
        <div>
          <Link>OPERAI STABILIMENTO DI SANT'ANGELO DEI LOMBARDI</Link>
          <p className="m-0">Ferrero</p>
          <p className="m-0 fw-light">Sant'Angelo dei Lombardi, Campania, Italia (In sede)</p>
          <div className="mb-3">
            <Bullseye className="text-success fw-bold" />
            <span className="fw-light"> Selezione attiva</span>
          </div>
          <span className="fw-light">1 mese fa</span>
        </div>
        <div className="d-flex">
          <EyeSlashFill className="fs-5 mx-3" />
          <Bookmark className="fs-5" />
        </div>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-center">
        <Button variant="white" className="d-flex text-secondary align-items-center">
          Mostra tutto
          <ArrowRight className="ms-2" />
        </Button>
      </div>
    </div>
  );
};
export default JobOffer;
