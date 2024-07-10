import { combineReducers } from "redux";

import fetchdata from "../reducer/reducer";
import historic from "../reducer/Historic";
import fluctuation from "../reducer/fluctuation";
export default combineReducers({
  fetchdata,
  historic,
  fluctuation,
});
