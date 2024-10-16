import { combineReducers } from "redux";

import fetchdata from "../reducer/reducer";
import historic from "../reducer/Historic";
import fluctuation from "../reducer/fluctuation";
import online from "../reducer/online";
import country from "../reducer/country";
export default combineReducers({
  fetchdata,
  historic,
  fluctuation,
  country,
  online
});
