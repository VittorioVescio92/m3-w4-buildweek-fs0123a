import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import { useSelector } from "react-redux";

const ModalExperience = ({ show, handleCloseModalEx, paramsId }) => {
  // const userId = useSelector((state) => state.myProfile._id);
  // const endPoint = `https://striveschool-api.herokuapp.com/api/profile/643d1a4522a6ab00141a856d/experiences`;
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${paramsId}/experiences`;
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // const postExperience = async () => {
  //   console.log(experienceData);
  //   try {
  //     let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/643d1a4522a6ab00141a856d/experiences", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(experienceData),
  //     });
  //     if (resp.ok) {
  //       // let fetchedBooks = await resp.json();
  //       // setBooks(fetchedBooks);
  //       handleCloseModalEx();
  //     } else {
  //       console.log("error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // postExperience();
    console.log(JSON.stringify(experienceData));
    if (experienceData.endDate === "") {
      setExperienceData.endDate = "null";
    }
    fetch(endPoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(experienceData),
    })
      .then((response) => {
        if (response.ok) {
          handleCloseModalEx();
          window.location.reload();
        } else {
          throw new Error("Errore durante l'invio dei dati");
        }
      })
      .catch((error) => console.log(error));
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
          <form onSubmit={handleSubmit}>
            <div id="emailHelp" className="form-text mb-2">
              * Indica che è obbligatorio
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="form-label mb-2">
                Qualifica*
              </label>
              <input type="text" className="form-control" placeholder="Esempio: Retails Sales Manager" name="role" value={experienceData.role} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <label htmlFor="company" className="form-label mb-2">
                Nome azienda*
              </label>
              <input type="text" className="form-control" placeholder="Esempio: Microsoft" name="company" value={experienceData.company} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <label htmlFor="startDate" className="form-label mb-2">
                Data di inizio*
              </label>
              <input type="date" className="form-control" name="startDate" value={experienceData.startDate} onChange={handleInputChange} required />
            </div>
            <div className="mb-2">
              <label htmlFor="endDate" className="form-label mb-2">
                Data di fine
              </label>
              <input type="date" className="form-control" name="endDate" value={experienceData.endDate} onChange={handleInputChange} />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="form-label mb-2">
                Competenze
              </label>
              <textarea
                className="form-control"
                placeholder="Esempio: Gestione contabilità, Amministrazione, Approvvigionamento Risorse ecc."
                name="description"
                value={experienceData.description}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="area" className="form-label mb-2">
                Località
              </label>
              <input type="text" className="form-control" placeholder="Esempio: Roma, Italia" name="area" value={experienceData.area} onChange={handleInputChange} />
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <div>
                <Button variant="secondary" onClick={handleCloseModalEx}>
                  Annulla
                </Button>
              </div>
              <div>
                <Button variant="primary" type="submit">
                  Salva
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
