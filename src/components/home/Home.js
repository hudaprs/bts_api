import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import MainLayout from "../layouts/MainLayout"
import Alert from "../alert/Alert"

// Redux - Actions
import {
  getChecklists,
  setChecklistName,
  createCheckList,
  deleteChecklist
} from "../../redux/actions/checklist-actions"

const Home = ({
  checklist: { checklists, loading, name },
  getChecklists,
  setChecklistName,
  createCheckList,
  deleteChecklist
}) => {
  useEffect(() => {
    document.title = "BTS - API - Dashboard"

    getChecklists()

    // eslint-disable-next-line
  }, [])

  const onCreate = (e) => {
    e.preventDefault()

    if (!name) {
      alert("Please fill all forms")
      return
    }

    createCheckList(name)
  }

  return (
    <MainLayout>
      <div className='flex w-full px-4 md:px-0'>
        <div className='m-auto'>
          <h3 className='text-4xl text-center mb-6'>Checklist App</h3>

          <div className='my-6'>
            <Alert />
          </div>

          <form className='w-full max-w-sm' onSubmit={onCreate}>
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
              <button
                className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded'
                type='reset'
              >
                Cancel
              </button>
            </div>
          </form>

          {loading ? (
            <div className='text-center mt-6'>
              <span className='fas fa-circle-notch fa-spin fa-2x'></span>
            </div>
          ) : checklists && checklists.length !== 0 ? (
            checklists.map((check) => (
              <div
                className='w-full flex justify-between border-b border-black mt-6 p-3 mb-2'
                key={check.id}
              >
                <p>{check.name}</p>
                <em
                  className='fas fa-times cursor-pointer'
                  onClick={(e) => {
                    e.preventDefault()

                    if (window.confirm("Delete?")) {
                      deleteChecklist(check.id)
                    }
                  }}
                ></em>
              </div>
            ))
          ) : (
            <span className='text-red text-center'>No Checklist found</span>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

Home.propTypes = {
  checklist: PropTypes.object.isRequired,
  getChecklists: PropTypes.func.isRequired,
  setChecklistName: PropTypes.func.isRequired,
  createCheckList: PropTypes.func.isRequired,
  deleteChecklist: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  checklist: state.checklist
})

export default connect(mapStateToProps, {
  getChecklists,
  setChecklistName,
  createCheckList,
  deleteChecklist
})(Home)
