import React, { useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux - Actions
import { setUserData, login } from "../../redux/actions/auth-actions"

// Components
import Alert from "../alert/Alert"

const Login = ({ auth: { token, userData, loading }, setUserData, login }) => {
  useEffect(() => {
    document.title = "BTS - API - Login"
  }, [])

  const { username, password } = userData

  const onLogin = (e) => {
    e.preventDefault()

    login(userData)
  }

  if (token) {
    return <Redirect to='/' />
  }

  return (
    <div className='h-auto flex h-screen'>
      <div className='w-full m-auto max-w-xs'>
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={onLogin}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter Username...'
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              value={username}
            />
          </div>

          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Enter Password...'
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={password}
            />
          </div>

          <div className='mb-6'>
            <Alert />
          </div>

          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              disabled={loading}
            >
              {loading && <em className='fas fa-circle-notch fa-spin'></em>}{" "}
              Login
            </button>
            <Link
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              to='/register'
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  setUserData: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
})

export default connect(mapStateToProps, { setUserData, login })(Login)
