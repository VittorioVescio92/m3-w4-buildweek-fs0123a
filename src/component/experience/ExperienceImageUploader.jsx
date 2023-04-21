import { useState } from "react";
import { useSelector } from "react-redux";

function ExperienceImageUploader(experienceId) {
  const [file, setFile] = useState();
  const userId = useSelector(state => state.myProfile.content._id);
  const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  console.log(experienceId.experienceId);
  function uploadAction() {
    const data = new FormData();
    data.append("experience", file);

    fetch(endpoint + userId + "/experiences/" + experienceId.experienceId + "/picture", {
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
  console.log(file);

  function selectFile() {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  }

  return (
    <form>
      <input id="file-input" type="file" name="fileName" style={{ display: "none" }} onChange={handleFileChange} />
      <button type="button" onClick={selectFile} className="my-2">
        Seleziona file
      </button>
      <input className="mx-3" type="button" value="upload" onClick={uploadAction} />
    </form>
  );
}
export default ExperienceImageUploader;
