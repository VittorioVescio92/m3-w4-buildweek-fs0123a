/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container } from "react-bootstrap";
import EpicodeImg from "../assets/img/epicode-logo.png";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserExperienceAction } from "../redux/actions";

const ExperienceComponents = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.content._id);
  const experience = useSelector(state => state.experience.content);
  const experienceData = useSelector(state => state.experience.experienceData);
  console.log(experienceData);

  useEffect(() => {
    dispatch(getUserExperienceAction(userId));
  }, []);

  const navigate = useNavigate();
  const navigateToExperience = () => {
    navigate("/experience");
    window.scrollTo(0, 0);
  };
  return (
    <Container className="mt-2 d-flex p-0">
      <section className="rounded-3 border-dark profile p-3 w-100">
        <h3>Esperienze</h3>
        {experience &&
          experience.map(item => (
            <div key={item._id}>
              <div className="d-flex justify-content-start align-items-center">
                <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
                <div className="d-flex flex-column">
                  <p className="ms-3 fw-bold text-secondary">{item.role}</p>
                  <p className="ms-3 text-secondary">{item.company}</p>
                  <p className="ms-3 text-secondary">
                    {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                  </p>
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

export default ExperienceComponents;
