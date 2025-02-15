import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data =  useLoaderData()
    // const [data ,setdata] = useState([])
    // useEffect (() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // } , [])
  return (
    <div className='bg-green-400 text-3xl text-black text-center p-5 m-2'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture"  width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
   const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
return response.json()
}