import { SET_ALERT, CLEAR_ALERT } from "../types/alert-types"

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return [payload, ...state]
    case CLEAR_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}
