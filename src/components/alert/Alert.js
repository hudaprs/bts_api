import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const Alert = ({ alert }) => {
  return (
    alert.length !== 0 &&
    alert.map((al, i) => (
      <div
        className={`bg-${al.type}-100 border border-${al.type}-400 text-${al.type}-700 px-4 py-3 rounded relative mb-6`}
        role='alert'
        key={i}
      >
        <span className='block sm:inline'>{al.message}</span>
      </div>
    ))
  )
}

Alert.propTypes = {
  alert: PropTypes.array
}

const mapStateToProps = (state) => ({
  alert: state.alert
})

export default connect(mapStateToProps)(Alert)
