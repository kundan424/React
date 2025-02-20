
import react, { useEffect, useState } from "react"
import './App.css'
import { useDispatch } from "react-redux"
import authservice from './appwrite/auth'
import {login , logout} from './store/authSlice'
import {Header , Footer } from './components'

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authservice.getCurrentUser()
    .then( (userData) => {
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))
  } , [])
 
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-green-300 ">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div >
  ) : null
}

export default App
