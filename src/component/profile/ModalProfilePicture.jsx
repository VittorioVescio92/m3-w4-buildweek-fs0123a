import { Image, Modal } from "react-bootstrap";
import { CameraFill, ImageFill, Pencil, TrashFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ModalProfilePicture = ({ show, handleClose }) => {
  const user = useSelector(state => state.myProfile.content);

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
              <div className="text-center">
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
    </>
  );
};
export default ModalProfilePicture;
