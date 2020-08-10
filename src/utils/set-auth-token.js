import axios from "../utils/default-axios"

const setAuthToken = (token) => {
  console.log(localStorage.token)
  if (localStorage.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      token || localStorage.token
    }`
  } else {
    delete axios.defaults.headers.common
  }
}

export default setAuthToken
