import {
  SET_USER_DATA,
  CLEAR_USER_DATA,
  LOGIN,
  REGISTER,
  AUTH_ERROR,
  SET_LOADING,
  LOGOUT
} from "../types/auth-types"

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  userData: {
    email: "",
    username: "",
    password: ""
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      }
    case CLEAR_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          email: "",
          username: "",
          password: ""
        }
      }
    case LOGIN:
      localStorage.setItem("token", payload.data.token)

      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem("token"),
        loading: false
      }
    case REGISTER:
    case AUTH_ERROR:
      return {
        ...state,
        loading: false
      }
    case LOGOUT:
      return localStorage.removeItem("token")
    default:
      return state
  }
}
