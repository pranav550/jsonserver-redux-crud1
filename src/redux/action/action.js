import {
  GET_DETAIL,
  POST_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
} from "../../type";

import {
  GetApiDetails,
  PostApiDetails,
  UpdateApiDetails,
  DeleteApiDetails,
} from "../../api/axiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log(res);
      dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAIL,
      payload: false,
    });
    return PostApiDetails(request).then((res) => {
      console.log(res);
      dispatch({
        type: POST_DETAIL,
        payload: true,
      });
    });
  };
};

const UpdateApiAction = (request, id) => {
  //   return function (dispatch) {
  //     dispatch({
  //       type: UPDATE_DETAIL,
  //       payload: false,
  //     });
  //     return UpdateApiDetails(request).then((res) => {
  //       console.log(res);
  //       dispatch({
  //         type: UPDATE_DETAIL,
  //         payload: true,
  //       });
  //     });
  //   };
};

const DeleteApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAIL,
      payload: false,
    });
    return DeleteApiDetails(id).then((res) => {
      console.log(res);
      dispatch({
        type: DELETE_DETAIL,
        payload: true,
      });
    });
  };
};

export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction };
