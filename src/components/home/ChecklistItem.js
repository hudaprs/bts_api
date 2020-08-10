import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const ChecklistItem = ({ checklist, deleteChecklist }) => {
  return (
    <>
      <div
        className='w-full flex justify-between border-b border-black mt-6 p-3 mb-2'
        key={checklist.id}
      >
        <p>{checklist.name}</p>
        <em
          className='fas fa-times cursor-pointer'
          onClick={(e) => {
            e.preventDefault()

            if (window.confirm("Delete?")) {
              deleteChecklist(checklist.id)
            }
          }}
        ></em>
      </div>
    </>
  )
}

ChecklistItem.propTypes = {
  checklist: PropTypes.object.isRequired,
  deleteChecklist: PropTypes.func.isRequired
}

export default ChecklistItem
