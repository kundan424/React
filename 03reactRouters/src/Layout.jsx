import React from 'react'
import Header from './Components/Header/Header'
import Footer  from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home'
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
