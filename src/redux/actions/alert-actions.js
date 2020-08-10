import { v4 as uuidv4 } from "uuid"
import { SET_ALERT, CLEAR_ALERT } from "../types/alert-types"

export const setAlert = (type, message, timeout = 5000) => (dispatch) => {
  const id = uuidv4()

  dispatch({
    type: SET_ALERT,
    payload: { id, type, message }
  })

  setTimeout(() => dispatch({ type: CLEAR_ALERT, payload: id }), timeout)
}
