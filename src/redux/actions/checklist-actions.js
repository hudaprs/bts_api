import {
  SET_LOADING,
  GET_ALL_CHECKLIST,
  SET_CHECKLIST_NAME,
  CREATE_CHECKLIST,
  DELETE_CHECKLIST,
  CLEAR_CHECKLIST_NAME,
  CHECKLIST_ERROR
} from "../types/checklist-types"

// Redux - Actions
import { setAlert } from "./alert-actions"

// Utils
import axios from "../../utils/default-axios"
import setAuthToken from "../../utils/set-auth-token"

export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING })
}

export const getChecklists = () => async (dispatch) => {
  dispatch(setLoading())
  setAuthToken(localStorage.token)

  try {
    const checklists = await axios.get("checklist")

    dispatch({ type: GET_ALL_CHECKLIST, payload: checklists.data.data })
  } catch (err) {
    dispatch(setAlert("red", err.response.data.errorMessage))
    dispatch({ type: CHECKLIST_ERROR })
  }
}

export const setChecklistName = (name) => async (dispatch) => {
  dispatch({ type: SET_CHECKLIST_NAME, payload: name })
}

export const createCheckList = (name) => async (dispatch) => {
  dispatch(setLoading())
  setAuthToken(localStorage.token)

  try {
    const newChecklist = await axios.post("checklist", {
      name
    })

    dispatch({ type: CREATE_CHECKLIST, payload: newChecklist.data.data })
    dispatch({ type: CLEAR_CHECKLIST_NAME })
    dispatch(setAlert("green", newChecklist.data.message))
  } catch (err) {
    dispatch(setAlert("red", err.response.data.errorMessage))
    dispatch({ type: CHECKLIST_ERROR })
  }
}

export const deleteChecklist = (id) => async (dispatch) => {
  dispatch(setLoading())
  setAuthToken(localStorage.token)

  try {
    const deletedChecklis = await axios.delete(`checklist/${id}`)

    dispatch({ type: DELETE_CHECKLIST, payload: id })
    dispatch(setAlert("green", deletedChecklis.data.message))
  } catch (err) {
    dispatch(setAlert("red", err.response.data.errorMessage))
    dispatch({ type: CHECKLIST_ERROR })
  }
}
