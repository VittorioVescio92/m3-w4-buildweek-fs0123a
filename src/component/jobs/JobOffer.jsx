import { useState } from "react";
import { Image } from "react-bootstrap";
import { Bookmark, Bullseye, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import epicodeLogo from "../../assets/img/epicode-logo.png";

const JobOffer = offer => {
  const [showOffer, setShowOffer] = useState(true);

  const toggleOffer = () => {
    setShowOffer(!showOffer);
  };

  return (
    <div>
      {showOffer && (
        <div className="d-flex justify-content-between">
          <div>
            <Image src={epicodeLogo} alt="" width={50} className="me-3"></Image>
          </div>
          <div className="px-1 d-flex flex-grow-1 justify-content-start">
            <Link className="text-decoration-none text-dark" to={offer.offer.url}>
              <h3>{offer.offer.title}</h3>
              <h5>{offer.offer.company_name}</h5>
              <p className="m-0 fw-light">{offer.offer.candidate_required_location}</p>
              <div className="mb-3">
                <Bullseye className="text-success fw-bold" />
                <span className="fw-light"> Selezione attiva</span>
              </div>
              <span className="fw-light">{new Date(offer.offer.publication_date).toLocaleDateString()}</span>
            </Link>
          </div>
          <div className="d-flex">
            <EyeSlashFill className="fs-5 mx-3" onClick={toggleOffer} style={{ cursor: "pointer" }} />
            <Bookmark className="fs-5" />
          </div>
        </div>
      )}
      {showOffer && <hr />}
    </div>
  );
};

export default JobOffer;
