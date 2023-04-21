// import ModalExperienceDeletePut from "./ModalExperienceDeletePut";
import EpicodeImg from "../../assets/img/epicode-logo.png";
import { Button, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleCloseModalEx = () => setShow(false);
  const handleShowModalEx = () => setShow(true);

  return (
    // <div className="post" onClick={handleShow}>
    //   <div className="d-flex post-body p-2">
    //     <div className="me-3">
    //       <Image width={60} height={60} src={post.user.image} />
    //     </div>
    //     <div className="overflow-hidden">
    //       <p>
    //         <span>Pubblicato da: </span>
    //         <span>
    //           {post.user.name} {post.user.surname}
    //         </span>
    //         <span> - {post.createdAt}</span>
    //       </p>

    //       <p>{post.text}</p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="d-flex justify-content-start align-item.items-center">
        <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
        <div className="d-flex justify-content-between  flex-grow-1">
          <div className="d-flex flex-column">
            <p className="ms-3 fw-bold text-secondary">{post}</p>
            <p className="ms-3 text-secondary">{post}</p>
            <p className="ms-3 text-secondary">
              {new Date(post).toLocaleDateString()} - {new Date(post).toLocaleDateString()}
            </p>
            <p className="ms-3 text-secondary">{post}</p>
            <p className="ms-3 mt-3">
              <span className="fw-bold">Competenze: </span> {post}
            </p>
          </div>
          <div>
            {/* <Button onClick={handleShowModalEx} variant="light" className="rounded-pill mt-0 my-2 ml-auto"> */}
            <Button variant="light" className="rounded-pill mt-0 my-2 ml-auto">
              <Pencil />
            </Button>
            {/* <ModalExperienceDeletePut show={show} handleCloseModalEx={handleCloseModalEx} experience={item.item} /> */}
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default PostCard;
