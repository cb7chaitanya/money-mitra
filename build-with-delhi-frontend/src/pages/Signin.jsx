import React from 'react'
import AuthForm from '../components/Auth/AuthForm'
import { ToastContainer } from 'react-toastify'
import Testimonials from '../components/Auth/Testimonials'

const Signin = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <AuthForm type={"signin"}/>
        <div className='hidden lg:block'>
            <Testimonials />
        </div>
        <ToastContainer />
    </div>
  )
}

export default Signin