// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// export default function Protected({
//     children, authentication = true
// }) {
//     const navigate = useNavigate()
//     const [loader, setLoader] = useState(true)
//     const authStatus = useSelector(state => state.auth.status)

//     useEffect(() => {
//         if (authentication && authStatus !== authentication) {
//             navigate('/login')
//         } else if (!authentication && authStatus !== authentication) {
//             navigate('/')
//         }
//         setLoader(false)
//     }, [authStatus, navigate, authentication])
//     return loader ? <h1>loading...</h1> : <>{children}</>
// }

import React from 'react' // Importing React for building components
import { useEffect, useState } from 'react' // Importing hooks for side effects and state management
import { useNavigate } from 'react-router-dom' // Importing useNavigate for programmatic navigation
import { useSelector } from 'react-redux' // Importing useSelector to access the Redux store

// Protected Component to handle route protection


export default function Protected({
    children, // The component that needs to be protected
    authentication = true // A boolean flag indicating whether authentication is required (default: true)
}) {
    const navigate = useNavigate() // Hook for redirecting users
    const [loader, setLoader] = useState(true) // State to manage loading while authentication is checked
    const authStatus = useSelector(state => state.auth.status) // Getting authentication status from Redux store

    // Effect to check authentication and handle redirection
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            // If authentication is required but user is not authenticated, redirect to login
            navigate('/login') 
        } else if (!authentication && authStatus !== authentication) {
            // If authentication is NOT required but user is authenticated, redirect to home
            navigate('/') 
        }
        setLoader(false) // Stop loading after authentication check
    }, [authStatus, navigate, authentication]) // Runs when authStatus, navigate, or authentication changes

    // Show loading message while authentication is being verified, otherwise render the children
    return loader ? <h1>loading...</h1> : <>{children}</>
}


/*
Here's the code explanation with inline comments and key concepts explained:

**Key Concepts Explained:**

1. **authentication Prop:**
- Determines if the wrapped content requires authentication (true) or requires being *unauthenticated* (false)
- Example: Set to `false` for login/signup pages that logged-in users shouldn't see

2. **authStatus:**
- Redux state value that tracks if user is logged in (true/false)
- Typically updated by login/logout actions in your app

3. **Loader Logic:**
- Prevents content flashing during initial authentication check
- Ensures redirect happens before showing protected content

4. **useEffect Dependencies:**
- `authStatus`: Re-run checks when login state changes
- `navigate`: Stable reference from React Router
- `authentication`: Re-run if component's protection type changes

**Workflow Logic:**
1. On initial load, check authentication status
2. If route requires auth but user isn't authenticated → redirect to login
3. If route requires no-auth but user is authenticated → redirect to home
4. If access valid → show content
5. Re-check whenever auth status changes (like after login/logout)

*/