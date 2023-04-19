import { Button, Modal } from "react-bootstrap";

const ModalHomeImg = ({ showImg, handleCloseHomeImg }) => {
  return (
    <>
      <Modal showImg={showImg} onHide={handleCloseHomeImg}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Modifica la tua foto</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a>Seleziona le immagini da condividere</a>
          <Button variant="white" className="border-primary">
            <span className="text-primary">Annulla</span>
          </Button>
          <Button variant="light">
            <span>Fine</span>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHomeImg;
