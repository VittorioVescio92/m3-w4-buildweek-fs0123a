import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { CameraFill, ImageFill, Pencil, TrashFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ImageUploader from "./imageUploader";

const ModalProfilePicture = ({ show, handleClose }) => {
  const user = useSelector(state => state.selectedProfile.content);
  const [uploadModal, setUploadModal] = useState(false);

  const handleUploadClose = () => {
    setUploadModal(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Foto Profilo</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Image src={user.image} width={300} className="rounded-circle" />
          </div>
          <div className=" mt-5 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div className="text-center" onClick={() => setUploadModal(true)}>
                <Pencil />
                <p>Modifica</p>
              </div>
              <div className="ms-3 text-center">
                <CameraFill />
                <p>Aggiungi Foto</p>
              </div>
              <div className="ms-3 text-center">
                <ImageFill />
                <p>Fotogrammi</p>
              </div>
            </div>
            <div>
              <div className="text-center">
                <TrashFill />
                <p>Elimina</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={uploadModal} onHide={handleUploadClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageUploader />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalProfilePicture;
