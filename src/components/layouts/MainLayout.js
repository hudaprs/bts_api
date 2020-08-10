import React from "react"

// Components
import Navbar from "./inc/Navbar"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default MainLayout
