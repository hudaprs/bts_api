import {
  SET_LOADING,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  LOGIN,
  REGISTER,
  AUTH_ERROR,
  LOGOUT
} from "../types/auth-types"

// Redux - Actions
import { setAlert } from "./alert-actions"

// Utils
import axios from "../../utils/default-axios"
import setAuthToken from "../../utils/set-auth-token"

const setLoading = (payload) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload })
}

export const setUserData = (userData) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      email: userData.email,
      username: userData.username,
      password: userData.password
    }
  })
}

export const login = (userData) => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    const logging = await axios.post("login", {
      username: userData.username,
      password: userData.password
    })

    setAuthToken(logging.data.data.token)
    dispatch({ type: LOGIN, payload: logging.data })
    dispatch({ type: CLEAR_USER_DATA })
  } catch (err) {
    dispatch(setAlert("red", err.response.data.errorMessage))
    dispatch({ type: AUTH_ERROR, payload: err.response.data.errorMessage })
  }
}

export const register = (userData) => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    await axios.post("register", userData)

    dispatch({ type: REGISTER })
    dispatch({ type: CLEAR_USER_DATA })
    dispatch(setAlert("green", "Register Successfully"))
  } catch (err) {
    dispatch(setAlert("red", err.response.data.errorMessage))
    dispatch({ type: AUTH_ERROR, payload: err.response.data.errorMessage })
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}
