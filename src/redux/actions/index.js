// endpoint
const endpointUserProfile = "https://striveschool-api.herokuapp.com/api/profile/me";

export const GET_USER_PROFILE = "GET_USER_PROFILE";

export const getUserProfileAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserProfile, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        }
      })
      console.log("fetch")
  
      if (resp.ok) {
        const data = await resp.json();
  
        dispatch({type: GET_USER_PROFILE, payload: data});
      } else {
        console.log("errore")
      }
    } catch (error) {
      console.log(error)
    }
  }
}