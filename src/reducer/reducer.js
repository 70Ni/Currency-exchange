const initialState = {
  data: null,
  loading: false,
  error: null,
  online: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      console.log(action.payload);
      return { ...state, loading: true, error: null, online: false };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        online: action.payload.online,
      };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.error, online: false };
    default:
      return state;
  }
};
