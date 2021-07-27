/* eslint-disable import/no-anonymous-default-export */
const INITAIL_STATE = {
  isSigned: null,
  userId: null,
};
export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSigned: true, userId: action.payload.userId };
    case "SIGN_OUT":
      return { ...state, isSigned: false, userId: null };
    default:
      return state;
  }
};
