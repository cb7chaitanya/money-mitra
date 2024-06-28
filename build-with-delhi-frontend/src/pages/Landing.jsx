import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    const navigateToSignup = () => {
        navigate('/signup')
    }
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='z-0'>
            <div className='flex flex-col justify-center items-center'>
                <div className='max-w-[90%] text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-[95px] font-bold leading-none tracking-wide text-white'>Financial advice made simple</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-slate-300 mt-4 tracking-normal'>A financial advisory platform built for people to aid their financial decision making by providing them with advice on which is the best loan lender for them and suggest the best performing stocks on the market</p>
                    <Button label={'Get Started'} className={'mt-8'} onClick={navigateToSignup}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing