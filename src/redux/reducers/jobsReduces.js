import { GET_JOB_ADS } from "../actions";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_ADS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default jobsReducer;
