import { DELETE_USER_EXPERIENCE, GET_USER_EXPERIENCE, SET_USER_EXPERIENCE } from "../actions";

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
    case DELETE_USER_EXPERIENCE:
      return {
        ...state,
        content: state.content.filter((item) => item._id !== action.payload ), // ritorna un array che soddisfa la condizione, cioè l'id dell'item sarà diverso da quello che arriva dalla action
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
