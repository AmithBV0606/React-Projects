import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect( () => {
    //     fetch('https://api.github.com/users/AmithBV0606')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className=' bg-gray-300 flex-col justify-center items-center  mb-5 '>
        <div className='text-center m-2 text-3xl'>
            Github Followers : {data.following}
        </div>

        <div className='flex justify-center items-center'>
            <img src={data.avatar_url} alt="GitHub DP" width={300} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Github

// Optimized way : 
export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/AmithBV0606')
    return response.json()
}