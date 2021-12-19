import {
  GET_DETAIL,
  POST_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
} from "../../type";

const initialState = {
  details: [],
  detailsById: [],
  isResponse: false,
  isUpdateResponse: false,
  isDeleteResponse: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        details: action.payload,
      };
    case POST_DETAIL:
      return {
        isResponse: action.payload,
      };
    // case UPDATE_DETAIL:
    //   return {
    //     isUpdateResponse: action.payload,
    //   };
    case DELETE_DETAIL:
      return {
        isDeleteResponse: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
