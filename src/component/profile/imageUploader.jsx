import { useState } from "react";
import { useSelector } from "react-redux";

function ImageUploader() {
  const [file, setFile] = useState(null);
  const userId = useSelector(state => state.selectedProfile.content._id);
  const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  console.log(userId);

  function uploadAction() {
    const data = new FormData();
    data.append("profile", file);
    console.log(data);

    fetch(endpoint + userId + "/picture", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
      },
      body: data,
    }).then(
      function (res) {
        if (res.ok) {
          alert("Perfect!");
          setFile(null);
        } else if (res.status === 401) {
          alert("Oops! ");
        }
      },
      function (e) {
        alert("Error submitting form!");
      }
    );
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  function selectFile() {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  }

  return (
    <form encType="multipart/form-data" action="">
      <input id="file-input" type="file" name="fileName" style={{ display: "none" }} onChange={handleFileChange} />
      <button type="button" onClick={selectFile}>
        Seleziona file
      </button>
      <input className="mx-3" type="button" value="upload" onClick={uploadAction} />
    </form>
  );
}
export default ImageUploader;
