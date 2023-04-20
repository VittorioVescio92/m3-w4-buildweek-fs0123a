import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

const ModalExperienceDeletePut = ({ show, handleCloseModalEx, experience }) => {
  const userId = useSelector((state) => state.myProfile.content._id);
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`;
  const [isWorking, setIsWorking] = useState(true);

  const [experienceItem, setExperienceItem] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  useEffect(() => {
    setExperienceItem({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate.substring(0, 10),
      endDate: new Date(experience.endDate).toLocaleDateString(),
      // endDate: isWorking ? null : experience.endDate.substring(0, 10),
      description: experience.description,
      area: experience.area,
    });
  }, [experience]);
  // console.log(experienceItem);
  // console.log(endPoint + experience._id);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceItem((prevState) => ({
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
      .then((response) => {
        if (response.ok) {
          handleCloseModalEx();
        } else {
          throw new Error("Errore durante la cancellazione dei dati");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleMod = () => {
    fetch(endPoint + experience._id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
      },
      body: JSON.stringify(experienceItem),
    })
      .then((response) => {
        if (response.ok) {
        } else {
          throw new Error("Errore durante la modifica dei dati");
        }
      })
      .catch((error) => Alert(error));
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
          <form onSubmit={handleMod}>
            <div id="emailHelp" className="form-text mb-2">
              * Indica che è obbligatorio
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="form-label mb-2">
                Qualifica*
              </label>
              <input type="text" className="form-control" placeholder="Esempio: Retails Sales Manager" name="role" value={experienceItem.role} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <label htmlFor="company" className="form-label mb-2">
                Nome azienda*
              </label>
              <input type="text" className="form-control" placeholder="Esempio: Microsoft" name="company" value={experienceItem.company} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isWorking" defaultChecked onChange={() => setIsWorking(!isWorking)} value={isWorking} />
                <label className="form-check-label" htmlFor="isWorking">
                  Attualmente ricopro questo ruolo
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="startDate" className="form-label mb-2">
                Data di inizio*
              </label>
              <input type="date" className="form-control" name="startDate" value={experienceItem.startDate} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <label htmlFor="endDate" className="form-label mb-2">
                Data di fine
              </label>
              <input type="date" className="form-control" name="endDate" value={experienceItem.endDate} disabled={isWorking} onChange={handleInputChange} required />
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
              <input type="text" className="form-control" placeholder="Esempio: Roma, Italia" name="area" value={experienceItem.area} onChange={handleInputChange} />
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
                <Button variant="warning" type="submit" className="mx-1">
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

export default ModalExperienceDeletePut;