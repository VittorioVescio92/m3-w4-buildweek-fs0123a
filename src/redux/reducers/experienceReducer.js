import { GET_USER_EXPERIENCE, SET_USER_EXPERIENCE } from "../actions";

const initialState = {
  content: [],
  experienceData: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    case SET_USER_EXPERIENCE:
      return {
        ...state,
        experienceData: action.payload,
      };
    default:
      return state;
  }
};
export default experienceReducer;
