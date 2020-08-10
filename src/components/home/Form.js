import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Redux - Actions
import {
  setChecklistName,
  createCheckList
} from "../../redux/actions/checklist-actions"

const Form = ({ loading, name, setChecklistName, createCheckList }) => {
  const onCreate = (e) => {
    e.preventDefault()

    if (!name) {
      alert("Please fill all forms")
      return
    }

    createCheckList(name)
  }

  return (
    <form className='text-center' onSubmit={onCreate}>
      <div className='flex items-center border-b border-teal-500 py-2'>
        <input
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          type='text'
          placeholder='What needs to be done?'
          onChange={(e) => setChecklistName(e.target.value)}
          value={name}
        />
        <button
          className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
          type='submit'
          disabled={loading}
        >
          Create
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  setChecklistName: PropTypes.func.isRequired,
  createCheckList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  name: state.checklist.name,
  loading: state.checklist.loading
})

export default connect(mapStateToProps, { setChecklistName, createCheckList })(
  Form
)
