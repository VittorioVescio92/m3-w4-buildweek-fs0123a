/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { deleteUserPostAction, getExperienceSelectedProfileAction, putUserAction } from "../../redux/actions";

const ModalPostDeletePut = ({ show, handleClose, post }) => {
  // const userId = useSelector((state) => state.myProfile.content._id);

  const dispatch = useDispatch();
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/${post._id}`;
  // const [postItem, setPostItem] = useState({
  //   text: "",
  // });
  const [text, setText] = useState("");
  console.log(text);

  useEffect(() => {
    setText(post.text);
    console.log(text);
  }, [post]);

  // useEffect(() => {
  //   setPostItem({
  //     text: post.text,
  //   });
  // }, [post]);

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setPostItem((prevState) => ({
  //     ...prevState,
  //     text: value,
  //   }));
  // };

  const handleDelete = () => {
    dispatch(deleteUserPostAction(post._id));
  };

  const handleMod = () => {
    dispatch(putUserAction(post, text));
  };

  // const handleMod = () => {
  //   fetch(endPoint, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
  //     },
  //     // body: JSON.stringify(postItem),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         dispatch(getExperienceSelectedProfileAction(post._id));
  //       } else {
  //         throw new Error("Errore durante la modifica dei dati");
  //       }
  //     })
  //     .catch((error) => Alert(error));
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {console.log(post._id)}

        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Modifica Post</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-2">
              <label htmlFor="description" className="form-label mb-2">
                Inserisci testo
              </label>
              <textarea
                className="form-control"
                placeholder="Esempio: Gestione contabilità, Amministrazione, Approvvigionamento Risorse ecc."
                name="description"
                value={text}
                // onChange={handleInputChange}
                onChange={(e) => setText(e.target.value)}
                rows={3}
              />
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <div>
                <Button variant="secondary" onClick={handleClose}>
                  Annulla
                </Button>
              </div>
              <div>
                <Button variant="danger" className="mx-1" onClick={handleDelete}>
                  Elimina
                </Button>
                <Button variant="warning" className="mx-1" onClick={handleMod}>
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

export default ModalPostDeletePut;
