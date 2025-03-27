const initialState = {
  isAuthenticated: false,
  user: null,
  googleUser: null,
  loading: false,
  error: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case 'GOOGLE_LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        googleUser: action.payload,
        loading: false,
        error: null
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        googleUser: null,
        loading: false,
        error: null
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default authenticationReducer; 