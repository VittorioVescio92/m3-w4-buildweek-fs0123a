// endpoint
const endpointUserProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
const endpointUserExperience = `https://striveschool-api.herokuapp.com/api/profile/`;

export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const SET_USER_EXPERIENCE = "SET_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";


export const getUserProfileAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserProfile, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_PROFILE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserExperienceAction = userId => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserExperience + userId + "/experiences", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_EXPERIENCE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setUserExperienceAction = (userId, experienceData) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(endpointUserExperience + userId + "/experiences", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
        body: JSON.stringify(experienceData),
      });
      const data = await resp.json();
      dispatch({
        type: "SET_USER_EXPERIENCE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteUserExperienceAction = value => ({type: DELETE_USER_EXPERIENCE, payload: value})