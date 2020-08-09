import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Tailwind
import "./assets/styles/tailwind.css"

// Components
import Dashboard from "./components/dashboard/Dashboard"

// Redux
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
