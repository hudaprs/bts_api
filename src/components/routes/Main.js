import React from "react"
import { Switch } from "react-router-dom"

// Components
import PrivateRoute from "./PrivateRoute"
import Home from "../home/Home"
import About from "../about/About"

const Main = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute exact path='/about' component={About} />
    </Switch>
  )
}

export default Main
