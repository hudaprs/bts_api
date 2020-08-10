import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import MainLayout from "../layouts/MainLayout"
import Form from "./Form"
import ChecklistItem from "./ChecklistItem"
import Alert from "../alert/Alert"

// Redux - Actions
import {
  getChecklists,
  deleteChecklist
} from "../../redux/actions/checklist-actions"

const Home = ({
  checklist: { checklists, loading },
  getChecklists,
  deleteChecklist
}) => {
  useEffect(() => {
    document.title = "BTS - API - Dashboard"

    getChecklists()

    // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <div className='flex w-full px-4 md:px-0'>
        <div className='m-auto md:w-1/2'>
          <h3 className='text-4xl text-center mb-6'>Checklist App</h3>

          <div className='my-6'>
            <Alert />
          </div>

          <Form />

          {loading ? (
            <div className='text-center mt-6'>
              <span className='fas fa-circle-notch fa-spin fa-2x'></span>
            </div>
          ) : checklists && checklists.length !== 0 ? (
            checklists.map((check) => (
              <ChecklistItem
                checklist={check}
                deleteChecklist={deleteChecklist}
              />
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
  deleteChecklist: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  checklist: state.checklist
})

export default connect(mapStateToProps, {
  getChecklists,
  deleteChecklist
})(Home)
