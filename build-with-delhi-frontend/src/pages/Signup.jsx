import React from 'react'
import AuthForm from '../components/Auth/AuthForm'
import { ToastContainer } from 'react-toastify'
import Testimonials from '../components/Auth/Testimonials'

const Signup = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <AuthForm type={"signup"}/>
      <div className='hidden lg:block'>
        <Testimonials />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup