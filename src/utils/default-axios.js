import axios from "axios"

const instance = axios.create({
  baseURL: "http://18.141.178.15:8080/",
  headers: { "Content-Type": "application/json" }
})

export default instance
