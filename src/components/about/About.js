import React from "react"

// Components
import MainLayout from "../layouts/MainLayout"

const About = () => {
  return (
    <MainLayout>
      <div className='flex flex-col text-center'>
        <p className='px-4 md:px-16 text-base text-red-800 '>
          Checklist Application with React Redux alongside with BTS API. Author,
          Huda Prasetyo.
        </p>
        <p>
          <a
            href='https://github.com/hudaprs'
            className='fa-2x'
            target='_blank'
          >
            <span className='fab fa-github'></span>
          </a>
        </p>
      </div>
    </MainLayout>
  )
}

export default About
