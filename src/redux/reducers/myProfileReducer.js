import { GET_MY_PROFILE } from "../actions"

const initialState = {
  content: [],
}

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state;
  }
}
export default myProfileReducer;