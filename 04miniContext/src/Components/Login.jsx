
import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext"; 

function Login() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }

    function HandleUsername(event){
        setUsername(event.target.value)
    
    }

    function HandlePassword(event){
        setPassword(event.target.value)
    }


    return (
    <div>
      <h2>Login Here</h2>
      <input type="text"  placeholder='username' value={username} onChange={HandleUsername} /> <span > </span>
      <input type="text" value={password} onChange={HandlePassword}/>
      <button onClick={HandleSubmit} >Submit</button>
    </div>
  )
}

export default Login
