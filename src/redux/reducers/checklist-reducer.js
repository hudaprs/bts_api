import {
  SET_LOADING,
  GET_ALL_CHECKLIST,
  SET_CHECKLIST_NAME,
  CREATE_CHECKLIST,
  DELETE_CHECKLIST,
  CLEAR_CHECKLIST_NAME,
  CHECKLIST_ERROR
} from "../types/checklist-types"

const initialState = {
  loading: false,
  checklists: [],
  name: ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_CHECKLIST:
      return {
        ...state,
        checklists: payload,
        loading: false
      }
    case SET_CHECKLIST_NAME:
      return {
        ...state,
        name: payload
      }
    case CREATE_CHECKLIST:
      return {
        ...state,
        checklists: [payload, ...state.checklists],
        loading: false
      }
    case DELETE_CHECKLIST:
      return {
        ...state,
        checklists: state.checklists.filter(
          (checklist) => checklist.id !== payload
        ),
        loading: false
      }
    case CLEAR_CHECKLIST_NAME:
      return {
        ...state,
        name: ""
      }
    case CHECKLIST_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
