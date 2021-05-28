import {
  AUTH_CANCELED,
  AUTH_COMPLETE_RESOLVED,
  AUTH_FETCH,
  AUTH_RESOLVED,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  role: null,
  user: null,
  emailVerified: 0,
  phoneVerified: 0,
  bvnVerified: 0,
  bankVerified: 0,
  employerVeried: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_RESOLVED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.role,
      };
    case AUTH_COMPLETE_RESOLVED:
      return {
        ...state,
        isLoading: false,
        user: { ...state.user, ...action.payload },
      };
    case AUTH_CANCELED:
      return {
        ...state,
        isLoading: false,
        token: null,
        role: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
