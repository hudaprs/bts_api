import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const PrivateRoute = ({ token, loading, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !token && !loading ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  )
}

PrivateRoute.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loading: state.auth.loading
})

export default connect(mapStateToProps)(PrivateRoute)
