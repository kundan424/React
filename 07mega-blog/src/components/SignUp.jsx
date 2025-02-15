/*
import React, { useState } from 'react'
import authSevice from '../appwrite/auth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authSevice.createAccount(data)
            if (userData) {
                const userData = await authSevice.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <input
                            label="Full Name"
                            placeholder='Enter you full name '
                            {...register("Name", {
                                required: true,
                            })}
                        />
                        <input
                            label="Email"
                            placeholder='enter your email'
                            type='email'
                            {...register("email", {
                                required: true, // Make email field required
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address", // Email validation using regex
                                }
                            })} />

                        <input
                            label="password"
                            placeholder='Enter your password '
                            type='password'
                            {...register("password", {
                                required: true,
                            })}
                        /> 
                        <button>Create Account</button>
                    </div>
                </form>   
            </div>
        </div>
    )
}

export default SignUp
*/

import React, { useState } from 'react' // React core and state management
import authSevice from '../appwrite/auth' // Appwrite auth service (Note: Typo in 'authService')
import { Link, Navigate, useNavigate } from 'react-router-dom' // Routing components
import { login } from '../store/authSlice' // Redux auth action
import { Button, Input, Logo } from './index' // Reusable components
import { useDispatch } from 'react-redux' // Redux dispatch hook
import { useForm } from 'react-hook-form' // Form management library

function SignUp() {
    const navigate = useNavigate() // Programmatic navigation hook
    const [error, setError] = useState("") // Error state management
    const dispatch = useDispatch() // Redux action dispatcher
    const { register, handleSubmit } = useForm() // Form hook initialization

    // Main signup handler
    const create = async (data) => {
        setError("") // Reset errors on new submission
        try {
            // Create account through Appwrite
            const userData = await authSevice.createAccount(data)
            
            if (userData) {
                // If account created successfully
                const userData = await authSevice.getCurrentUser() // Fetch user data
                if (userData) dispatch(login(userData)) // Update Redux store
                navigate('/') // Redirect to home
            }
        } catch (error) {
            setError(error.message) // Display error message
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                {/* Logo Section */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                {/* Header Section */}
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                
                {/* Login Link */}
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </p>

                {/* Error Display */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                {/* Signup Form */}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        {/* Full Name Input */}
                        <input
                            label="Full Name"
                            placeholder='Enter you full name '
                            {...register("Name", { // Note: Conventionally use lowercase 'name'
                                required: true,
                            })}
                        />

                        {/* Email Input with Validation */}
                        <input
                            label="Email"
                            placeholder='enter your email'
                            type='email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Invalid email format",
                                }
                            })}
                        />

                        {/* Password Input */}
                        <input
                            label="password"
                            placeholder='Enter your password '
                            type='password'
                            {...register("password", {
                                required: true,
                            })}
                        /> 

                        {/* Submit Button */}
                        <button>Create Account</button>
                    </div>
                </form>   
            </div>
        </div>
    )
}

export default SignUp