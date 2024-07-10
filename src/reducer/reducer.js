import FETCH_DATA from "../actions/datafetch";
import data from "../Components/Api/eur.json";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      // console.log(action.payload);
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};
