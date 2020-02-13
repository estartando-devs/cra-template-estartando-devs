const TYPES = {
  REQUEST: "lOGIN_REQUEST",
  SUCCESS: "lOGIN_SUCCESSS",
  ERROR: "lOGIN_ERROR"
};

const initial_state = {
  data: {},
  error: "",
  loading: false
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST:
      return { ...state, loading: true };
    case TYPES.SUCCESS:
      return { ...state, data: action.payload.user, loading: false };
    case TYPES.ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

export default userReducer;
