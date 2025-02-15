import React from "react"
import { useState } from "react"
import {InputBox} from "./components"
import useCurrencyInfo  from "./hooks/UseCurrencyInfo"
import './App.css'

function App() {

  const [amoount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const[convertAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom (to)
    setTo(From)
    setConvertedAmount (amount)
    setAmount(convertAmount)
  }
  
  return (
    <>
      <h1 className='text-3xl bg-orange-400'>currency Converter</h1>
      <h2 className="text-4xl text-blue-400"> hey welcome</h2>
    </>
  )
}

export default App
