import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input'
import { BASE_URL } from '../../../config/conf'
import axios from 'axios'

const AuthForm = ({type}) => {

    const [postInputs, setPostInputs] = useState({
        name: "",
        password: "",
        email: ""
    })
    const navigate = useNavigate()
    const handleSubmit = async() => {
        try{
            await axios.post(`${BASE_URL}/user/${type}`, postInputs, {
                withCredentials: true
            })
            navigate('/dashboard')
        } catch(error) {
            console.error(error)
        }   
    }
  return (
    <div className="h-screen flex justify-center flex-col bg-zinc-950">
            <div className="flex justify-center">
                <div className='bg-zinc-900 p-4 rounded-xl'>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold text-white">
                            Create an account
                        </div>
                        <div className="text-slate-400">
                            {type==="signup" ? "Already have an account?" : "Don't have an account?"}
                            <Link className="pl-2 underline" to={type==="signup"? "/signin" : "/signup"}>{type==="signup"? "Sign In" : "Sign Up"}</Link>
                        </div>                
                    </div> 
                    <div className="pt-4">
                        {type === "signup" ? <Input type="text" label="Name" placeholder="Enter your name" value={postInputs.name} onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                name: e.target.value
                            }))
                        }}/> : null}
                        <Input label="Email" type={"email"} value={postInputs.email} placeholder="Enter your Email" onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                email: e.target.value
                            }))
                        }}/>
                        <Input label="Password" type={"password"} value={postInputs.password} placeholder="Enter your password" onChange={(e)=>{
                            setPostInputs(({
                                ...postInputs,
                                password: e.target.value
                            }))
                        }}/>
                    </div>
                    <button onClick={handleSubmit} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 me-2 mb-2">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
  )
}

export default AuthForm