import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserExperienceAction } from "../redux/actions";

const ModalExperience = ({ show, handleCloseModalEx, experience }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user._id);
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`;
  const [experienceItem, setExperienceItem] = useState({
    role: experience.role,
    company: experience.company,
    startDate: new Date(experience.startDate).toLocaleDateString(),
    endDate: new Date(experience.endDate).toLocaleDateString(),
    description: experience.description,
    area: experience.area,
  });
  console.log(experienceItem.startDate);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setExperienceItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    fetch(endPoint + experience._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
      },
    })
      .then(response => {
        if (response.ok) {
          handleCloseModalEx();
          dispatch(deleteUserExperienceAction);
        } else {
          throw new Error("Errore durante la cancellazione dei dati");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseModalEx}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Aggiungi esperienza lavorativa</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit="">
            <div id="emailHelp" className="form-text mb-2">
              * Indica che è obbligatorio
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="form-label mb-2">
                Qualifica*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Esempio: Retails Sales Manager"
                name="role"
                value={experienceItem.role}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company" className="form-label mb-2">
                Nome azienda*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Esempio: Microsoft"
                name="company"
                value={experienceItem.company}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="startDate" className="form-label mb-2">
                Data di inizio*
              </label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={experienceItem.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="endDate" className="form-label mb-2">
                Data di fine
              </label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={experienceItem.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="form-label mb-2">
                Competenze
              </label>
              <textarea
                className="form-control"
                placeholder="Esempio: Gestione contabilità, Amministrazione, Approvvigionamento Risorse ecc."
                name="description"
                value={experienceItem.description}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="area" className="form-label mb-2">
                Località
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Esempio: Roma, Italia"
                name="area"
                value={experienceItem.area}
                onChange={handleInputChange}
              />
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <div>
                <Button variant="secondary" onClick={handleCloseModalEx}>
                  Annulla
                </Button>
              </div>
              <div>
                <Button variant="danger" className="mx-1" onClick={handleDelete}>
                  Elimina
                </Button>
                <Button variant="primary" type="submit" className="mx-1">
                  Modifica
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalExperience;
