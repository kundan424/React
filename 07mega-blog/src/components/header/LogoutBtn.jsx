import React from 'react'
import { useDispatch } from 'react-redux' // becuse it has to take action while logging out
import authService from '../../appwrite/config' // yahi logout functionality contained hai 
import { logout } from '../../store/authSlice' // particular logout function 


function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandeler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200
     hover:bg-blue-500 rounded-full'>Logout</button>
    )
}

export default LogoutBtn
