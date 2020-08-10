import React from "react"
import { Switch } from "react-router-dom"

// Components
import PrivateRoute from "./PrivateRoute"
import Home from "../home/Home"

const Main = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
    </Switch>
  )
}

export default Main
