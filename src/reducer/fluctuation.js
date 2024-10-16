const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "FLUCTUATION_DATA":
      // console.log(action.payload);
      return action.payload;
    case "FLUCTUATION_DATA_FAIL":
      // console.log(action.payload);
      return { message: action.payload.message };
    default:
      return state;
  }
};
