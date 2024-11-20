import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex my-2'>
       <img className='h-8 cursor-pointer' alt='loginIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxex6IB77c2H7crtcFCRR9agq0vqskhKA0g&s'></img>
       <span className='px-3 font-bold'>{name}</span>
       <span>{message}</span>
    </div>
  )
}

export default ChatMessage