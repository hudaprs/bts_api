import { combineReducers } from "redux"

import alert from "./alert-reducer"
import auth from "./auth-reducer"
import checklist from "./checklist-reducer"

export default combineReducers({
  alert,
  auth,
  checklist
})
