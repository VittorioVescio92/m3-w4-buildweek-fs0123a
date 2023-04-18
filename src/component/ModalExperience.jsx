import { useState } from "react";
import { Button, Dropdown, ModalFooter } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Envelope, Linkedin } from "react-bootstrap-icons";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ModalExperience = ({ show, handleCloseModalEx }) => {
  //   const user = useSelector((state) => state.user.content);

  return (
    <>
      <Modal show={show} onHide={handleCloseModalEx}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Aggiungi esperienza lavorativa</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="emailHelp" className="form-text">
            * Indica che è obbligatorio
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Qualifica*
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Esempio: Retails Sales Manager"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Tipo di impiego
            </label>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleziona
              </Button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    A tempo pieno
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Part-time
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Autonomo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Freelance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    A contratto
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Stage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Apprendistato
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Stagionale
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Scopri di più sui <a>tipi di impiego.</a>
            </p>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Nome azienda*
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Esempio: Microsoft"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Località
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Esempio: Milano, Italia"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Tipo di località
            </label>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleziona
              </Button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    In sede
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ibrida
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Da remoto
                  </a>
                </li>
              </ul>
              <p>Scegli un tipo di località (es. da remoto)</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label className="form-check-label" for="flexCheckChecked">
              Attualmente ricopro questo ruolo
            </label>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Data di inizio*
            </label>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mese
              </Button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Gennaio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Febbraio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marzo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aprile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Maggio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Giugno
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Luglio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Agosto
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settembre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ottobre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Novembre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dicembre
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Anno
              </Button>
            </div>
          </div>
          {/* <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Data di fine*
            </label>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mese
              </Button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Gennaio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Febbraio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marzo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aprile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Maggio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Giugno
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Luglio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Agosto
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settembre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ottobre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Novembre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dicembre
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <Button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Anno
              </Button>
            </div>
          </div> */}
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Settore*
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Es..: RCommercio al dettaglio"
            />
            <p>
              Linkedin utilizza le informazioni sul settore per fornire
              segnalazioni più pertinenti
            </p>
            <p>
              Scopri di più sulle <a>opzioni relative al settore</a>
            </p>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Descrizione"
              id="floatingTextarea"
            ></textarea>
          </div>
          <ModalFooter>
            <Button>Salva</Button>
          </ModalFooter>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalExperience;
