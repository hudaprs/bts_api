import React, { useEffect } from "react"

const Dashboard = () => {
  useEffect(() => {
    document.title = "BTS - API - Dashboard"
  }, [])

  return <div className=''>Dashboard</div>
}

export default Dashboard
