import { combineReducers } from "redux";
import userState from "./user";
import inputState from "./inputs";
import predictedDataState from "./predictedDataState";

const rootReducer = combineReducers({
  userState,
  inputState,
  predictedDataState
});

export default rootReducer;
