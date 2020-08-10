import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const CustomRoute = ({ loading, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.token && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

CustomRoute.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading
})

export default connect(mapStateToProps)(CustomRoute)
