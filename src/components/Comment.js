
import React from 'react'

const Comment = ({data}) => {
    console.log("data",data)
    const {name,comment}=data
  return (
    <div className='bg-red-600 shadow-2xl flex my-1 p-5 '>
        <img className='h-12 w-12' alt='user' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png'></img>
        <div>
        <h1 className='font-bold text-lg ml-2'>{name}</h1>
        <p className='ml-4'>{comment}</p>
        </div>
    </div>
  )
}

export default Comment