const initialState = {
  defcurrency: "usd",
  online: false,
  form: "else",
};



export default (state = initialState, action) => {
  switch (action.type) {
    case "BASE_CURRENCY":
      console.log(action.payload.online, "from Redux state ================");
      return {
        ...initialState,
        defcurrency: action.payload.defaultCurrency,
        online: action.payload.online,
      };
    // case "SET_ONLINE_STATUS":
    //   console.log(action.payload.online, "from Redux state ================");
    //   return {
    //     ...initialState,
    //     online: action.payload.online,
    //   };
    case "ERROR_ONLINE":
      return {
        ...initialState,
        online: action.payload,
      };
    default:
      return state;
  }
};
