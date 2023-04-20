import { GET_POSTS, POST_USER_POST, DELETE_USER_POST, PUT_USER_POST } from "../actions";

const initialState = {
  content: [],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload.slice(0, 15),
      }
    case POST_USER_POST:
      return {
        ...state,
        content:[...state.content, action.payload],
      };
    case PUT_USER_POST:
      return state.map((post) => {
        if (post._id !== action.id) {
          return post;
        }
        return {
          ...action.payload
        };
      });
      case DELETE_USER_POST:
      return {
        ...state,
        content: state.filter((post) => post._id !== action.payload)
      }
      default:
        return state;
  }
}
export default postsReducer;