import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import { streamReducers } from "./streamReducer";
import authReducers from "./authReducers";

export default combineReducers({
  auth: authReducers,
  // form: formReducer,
  streams: streamReducers,
});
