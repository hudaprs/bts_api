import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { logout } from "../../../redux/actions/auth-actions"

const Sidebar = ({ logout }) => {
  return (
    <div className='bg-gray-700 text-white mb-6'>
      <nav
        className='flex flex-col md:flex-row justify-center md:justify-around items-center w-full'
        style={{ height: "60px" }}
      >
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='ml-4 md:ml-8'>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        <Link
          to='#!'
          onClick={(e) => {
            e.preventDefault()

            logout()
          }}
          className='uppercase'
        >
          Logout
        </Link>
      </nav>
    </div>
  )
}

export default connect(null, { logout })(Sidebar)
