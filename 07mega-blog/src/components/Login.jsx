
/*
import React, { useState } from 'react' // Basic React imports
import { Link, useNavigate } from 'react-router-dom' // For client-side navigation
import { login as authLogin } from '../store/authSlice' // Redux action for authentication
import { Button, Input, Logo } from './index' // Reusable components
import { useDispatch } from 'react-redux' // To update Redux store
import authService from '../appwrite/auth' // Appwrite authentication service
import { useForm } from 'react-hook-form' // Form handling library

// function Login() {
//     // Navigation hook for page redirects
//     const navigate = useNavigate()
//     // Hook to dispatch actions to Redux store
//     const dispatch = useDispatch()
//     const { register, handleSubmit } = useForm()
//     const [error, setError] = useState("")

//     const login = async (data) => {
//         setError("")
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if (userData) {
//                     dispatch(authLogin(userData));
//                 }
//                 navigate('/')
//             }
//         } catch (error) {
//             setError(error.message)
//         }
//     }
//     return (
//         <div className='flex items-center justify-center w-full'>
//             <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//                 <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//                 </div>
//                 <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//                 </p>
//                 {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//                 <form onSubmit={handleSubmit(login)}
//                     className='mt-8'>
//                     <div className='space-y-5'>
//                         <input
//                             label="Email"
//                             placeholder='Enter your email'
//                             type='email'
//                             {...register("email", {
//                                 required: true,
//                                 validate: {
//                                     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                         "Email address must be a valid address",
//                                 }
//                             })} />

//                         <input
//                             label='password'
//                             placeholder=' Enter your password'
//                             type='password'
//                             {...register("password", {
//                                 required: true,
//                             })}
//                         />
//                         <button type='submit' className='w-full'>SignIN</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
*/

import React, { useState } from 'react' // Importing React and the useState hook for managing component state
import { Link, useNavigate } from 'react-router-dom' // Importing Link for navigation and useNavigate for programmatic redirection
import { login as authLogin } from '../store/authSlice' // Importing login action from Redux authSlice (renamed as authLogin)
import { Button, Input, Logo } from './index' // Importing reusable components
import { useDispatch } from 'react-redux' // Importing useDispatch hook to dispatch actions in Redux
import authService from '../appwrite/auth' // Importing authentication service for handling login
import { useForm } from 'react-hook-form' // Importing useForm from react-hook-form for form validation and handling

function Login() {
    const navigate = useNavigate() // Hook for programmatic navigation (redirecting users)
    const dispatch = useDispatch() // Hook for dispatching Redux actions
    const { register, handleSubmit } = useForm() // Destructuring register and handleSubmit from useForm for form handling
    const [error, setError] = useState("") // State variable to store error messages

    // Function to handle login
    const login = async (data) => {
        setError("") // Resetting any previous error before making a login request
        try {
            const session = await authService.login(data) // Attempting login using authService
            if (session) { // If login is successful
                const userData = await authService.getCurrentUser() // Fetch the current user's data
                if (userData) { // If user data exists
                    dispatch(authLogin(userData)); // Store user data in Redux state
                }
                navigate('/') // Redirect to home page after successful login
            }
        } catch (error) { 
            setError(error.mes) // If login fails, store the error message in state
        }
    }

    return (
        <div className='flex items-center justify-center w-full'> {/* Centering the form on the page */}
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                {/* Login Box Container */}
                
                {/* Logo Section */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Displaying the app logo */}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>

                {/* Signup Link */}
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>

                {/* Error Message Display */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                {/* Login Form */}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        
                        {/* Email Input Field */}
                        <input
                            label="Email" // Label for accessibility
                            placeholder='Enter your email' // Placeholder text
                            type='email' // Input type
                            {...register("email", { // Register input field for form handling
                                required: true, // Make email field required
                                validate: { 
                                    matchPatern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                        "Email address must be a valid address", // Email validation using regex
                                }
                            })} 
                        />

                        {/* Password Input Field */}
                        <input
                            label='password' // Label for accessibility
                            placeholder=' Enter your password' // Placeholder text
                            type='password' // Input type for password
                            {...register("password", {
                                required: true, // Password field is required
                            })}
                        />

                        {/* Submit Button */}
                        <button type='submit' className='w-full'>
                            SignIN {/* Button text */}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login // Exporting Login component for use in other parts of the app


