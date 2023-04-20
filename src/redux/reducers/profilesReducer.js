import { GET_PROFILES, SET_USER_IMAGE } from "../actions";

const initialState = {
  content: [],
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        // content: [action.payload]
        content: action.payload.slice(0, 10),
      };
    case SET_USER_IMAGE:
      return { state, content: [...state.content, action.payload] };
    default:
      return state;
  }
};
export default profilesReducer;
