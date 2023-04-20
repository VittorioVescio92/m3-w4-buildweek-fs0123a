/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container } from "react-bootstrap";
import EpicodeImg from "../../assets/img/epicode-logo.png";
import { ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperienceSelectedProfileAction } from "../../redux/actions";
import ModalExperience from "../experience/ModalExperience";

const ExperienceProfileComponents = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(state => state.selectedProfile.content._id);

  const experience = useSelector(state => state.experience.content);

  useEffect(() => {
    dispatch(getExperienceSelectedProfileAction(selectedUserId));
  }, [selectedUserId]);

  const navigate = useNavigate();
  const navigateToExperience = () => {
    navigate("/experience");
    window.scrollTo(0, 0);
  };

  const [show, setShow] = useState(false);
  const handleCloseModalEx = () => setShow(false);
  const handleShowModalEx = () => setShow(true);
  return (
    <Container className="mt-2 d-flex p-0">
      <section className="rounded-3 border-dark profile p-3 w-100">
        <div className="d-flex">
          <h3 className="me-auto">Esperienze</h3>
          <Button onClick={handleShowModalEx} variant="white" className="d-flex text-secondary align-items-center fs-2">
            <PlusLg />
          </Button>
          <ModalExperience show={show} handleCloseModalEx={handleCloseModalEx} selectedUserId={selectedUserId} />
          <Button
            onClick={navigateToExperience}
            variant="white"
            className="d-flex text-secondary align-items-center fs-3"
          >
            <Pencil />
          </Button>
        </div>
        {experience &&
          experience.slice(0, 5).map(item => (
            <div key={item._id}>
              <div className="d-flex justify-content-start align-items-center">
                <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                <div className="d-flex flex-column">
                  <p className="ms-3 fw-bold text-secondary">{item.role}</p>
                  <p className="ms-3 text-secondary">{item.company}</p>
                  <p className="ms-3 text-secondary">
                    {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                  </p>
                  <p className="ms-3 text-secondary">{item.area}</p>
                  <p className="ms-3 mt-3">
                    <span className="fw-bold">Competenze: </span> {item.description}
                  </p>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        <div className="d-flex justify-content-center">
          <Button onClick={navigateToExperience} variant="white" className="d-flex text-secondary align-items-center">
            Mostra tutte le esperienze ({experience.length})
            <ArrowRight className="ms-2" />
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default ExperienceProfileComponents;
