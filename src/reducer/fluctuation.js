const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "FLUCTUATION_DATA":
      console.log(action.payload);
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};
