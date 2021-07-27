import { stream } from "../api";
import history from "../history";

export const signIn = (userId) => ({
  type: "SIGN_IN",
  payload: {
    userId,
  },
});
export const signOut = () => ({
  type: "SIGN_OUT",
});

export const createStream = (formValue) => {
  return async function (dispatch, getState) {
    const { userId } = getState().auth;
    const response = await stream.post("/streams", {
      ...formValue,
      ...(userId && { userId }),
    });
    dispatch({
      type: "CREATE_STREAM",
      payload: response.data,
    });
    history.push("/");
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await stream.get("/streams");
  dispatch({
    type: "FETCH_STREAMS",
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`/streams/${id}`);
  dispatch({
    type: "FETCH_STREAM",
    payload: response.data,
  });
};

export const updateStream = (id, formValue) => async (dispatch) => {
  const response = await stream.patch(`/streams/${id}`, formValue);
  dispatch({
    type: "UPDATE_STREAM",
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`);
  dispatch({
    type: "DELETE_STREAM",
    payload: id,
  });
  history.push("/");
};
