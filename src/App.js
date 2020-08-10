import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Tailwind
import "./assets/styles/tailwind.css"

// Routes
import Auth from "./components/routes/Auth"
import Main from "./components/routes/Main"

// Redux
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact component={Main} />
        <Route exact component={Auth} />
      </Router>
    </Provider>
  )
}

export default App
