// endpoint home page
const endpointMyProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
// endpoint profile page
const endpointSelectedProfile = "https://striveschool-api.herokuapp.com/api/profile/";
// endpoint experience profile page
const endpointUserExperience = `https://striveschool-api.herokuapp.com/api/profile/`;
// endpoint aside seen profiles
const endpointProfiles = "https://striveschool-api.herokuapp.com/api/profile/";
// endpoint posts home page
const endpointPosts = "https://striveschool-api.herokuapp.com/api/posts/";
// endpoint profile image
// const endpointProfileImage = "https://striveschool-api.herokuapp.com/api/profile/";
//endpoint Annunci di lavoro develop
const endpointJobs = "https://strive-benchmark.herokuapp.com/api/jobs?develop=writing&limit=10";

// gestione del profilo personale
export const GET_MY_PROFILE = "GET_MY_PROFILE";
// export const SET_USER_IMAGE = "SET_USER_IMAGE";
// gestione dei posts
export const GET_POSTS = "GET_POSTS";
export const POST_USER_POST = "POST_USER_POST";
export const DELETE_USER_POST = "DELETE_USER_POST";

export const GET_PROFILES = "GET_PROFILES";
export const GET_SELECTED_PROFILE = "GET_SELECTED_PROFILE";
export const GET_EXPERIENCES_SELECTED_PROFILE = "GET_EXPERIENCES_SELECTED_PROFILE";

//gestione lavori
export const GET_JOB_ADS = "GET_JOB_ADS";

// action che viene eseguita all'avvio dell'app (homepage)
export const getMyProfileAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointMyProfile, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("fetch");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_MY_PROFILE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * ACTION SPECIFICHE PER I POSTS
 * ---------------------------------------
 */
// ricevo tutti i posts dell'API
export const getPostsAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointPosts, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch");

      if (resp.ok) {
        const data = await resp.json();
        data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_POSTS, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// inserisco un nuovo post
export const postUserAction = (postId, body) => {
  return async dispatch => {
    try {
      let resp = await fetch(`${endpointPosts}${postId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        let data = await resp.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

// elimino uno specifico post
export const deleteUserPost = postId => {
  return async dispatch => {
    try {
      let resp = await fetch(`${endpointPosts}${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (resp.ok) {
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

// action che viene eseguita quando selezioniamo un profilo
export const getSelectedProfileAction = id => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointSelectedProfile + `${id === undefined ? "me" : id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch selected profile");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_SELECTED_PROFILE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// action che recupera le esperienze del profilo selezionato
export const getExperienceSelectedProfileAction = userId => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserExperience + userId + "/experiences", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch experience profile");

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

// action che riempie il componente AsideSeenProfiles
export const getProfilesAction = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(endpointProfiles, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_PROFILES, payload: data });
      } else {
        console.log("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const SET_USER_EXPERIENCE = "SET_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";

// getSelectedProfileAction
// export const getUserExperienceAction = userId => {
// export const getExperienceselectedProfileAction = userId => {
//   return async (dispatch, getState) => {
//     try {
//       let resp = await fetch(endpointUserExperience + userId + "/experiences", {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
//         },
//       });
//       console.log("fetch experience profile");

//       if (resp.ok) {
//         const data = await resp.json();

//         dispatch({ type: GET_USER_EXPERIENCE, payload: data });
//       } else {
//         console.log("errore");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getUserExperienceAction = userId => {
//   return async (dispatch, getState) => {
//     try {
//       let resp = await fetch(endpointUserExperience + userId + "/experiences", {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
//         },
//       });
//       console.log("fetch experience profile");

//       if (resp.ok) {
//         const data = await resp.json();

//         dispatch({ type: GET_USER_EXPERIENCE, payload: data });
//       } else {
//         console.log("errore");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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

export const deleteUserExperienceAction = value => ({ type: DELETE_USER_EXPERIENCE, payload: value });

//ACTION IMMAGINE DEL PROFILO

// export const setUserImageAction = userId => {
//   return async (dispatch, getState) => {
//     try {
//       const resp = await fetch(endpointProfileImage + userId + "/picture", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
//         },
//         body: JSON.stringify(),
//       });
//       const data = await resp.json();
//       dispatch({
//         type: "SET_USER_IMAGE",
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

//ACTION PER LE OFFERTE DI LAVORO

export const getJobsAdsAction = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(endpointJobs, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });

      if (resp.ok) {
        const data = await resp.json();
        data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_JOB_ADS, payload: data });
      } else {
        console.log("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
