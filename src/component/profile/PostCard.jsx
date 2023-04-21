// import ModalExperienceDeletePut from "./ModalExperienceDeletePut";
// import EpicodeImg from "../../assets/img/epicode-logo.png";
import { Button, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useState } from "react";
import ModalPostDeletePut from "./ModalPostDeletePut";

const PostCard = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="post">
      {/* <div className="post"> */}
      <div className="d-flex post-body justify-content-start p-2 w-100">
        <div className="me-3">
          {/* <Image src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} /> */}
          <Image width={60} height={60} src={post.user.image} />
        </div>
        <div className="overflow-hidden">
          <p>
            <span>Pubblicato da: </span>
            <span>
              {post.user.name} {post.user.surname}
            </span>
            <span> - {new Date(post.createdAt).toLocaleDateString()}</span>
          </p>

          <p className="fs-5">{post.text}</p>
        </div>
        <Button variant="light" className="rounded-pill mt-0 my-2 ml-auto" onClick={handleShow}>
          <Pencil />
        </Button>
        <ModalPostDeletePut show={show} handleClose={handleClose} post={post} />
        {console.log(show, handleClose)}
      </div>
    </div>

    // <div>
    //   <div className="d-flex justify-content-start align-item.items-center">
    //     <Image src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
    //     <div className="d-flex justify-content-between  flex-grow-1">
    //       <div className="d-flex flex-column">
    //         <p className="ms-3 fw-bold text-secondary">Pubblicato da: </p>
    //         <p className="ms-3 text-secondary">
    //           {post.user.name} {post.user.surname}
    //         </p>
    //         <p className="ms-3 text-secondary">{new Date(post.createdAt).toLocaleDateString()}</p>
    //         {/* <p className="ms-3 text-secondary">{post}</p> */}
    //         <p className="ms-3 mt-3">{post.text}</p>
    //       </div>
    //       <div>
    //         {/* <Button onClick={handleShowModalEx} variant="light" className="rounded-pill mt-0 my-2 ml-auto"> */}
    //         <Button variant="light" className="rounded-pill mt-0 my-2 ml-auto">
    //           <Pencil />
    //         </Button>
    //         {/* <ModalExperienceDeletePut show={show} handleCloseModalEx={handleCloseModalEx} experience={item.item} /> */}
    //       </div>
    //     </div>
    //   </div>
    //   <hr></hr>
    // </div>
  );
};
export default PostCard;
