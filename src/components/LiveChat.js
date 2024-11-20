
import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMesaage } from '../store/chatSlice';

const LiveChat = () => {
   const dispatch=useDispatch();
   const chatMessage=useSelector((store)=>store.chat.meassage);
   console.log("chat",chatMessage)
  useEffect(()=>{
  
    const clearIn=setInterval(() => {
        dispatch(addMesaage({
            name:"Akshay",
            message:"Loren Ipsum"
        }))
    }, 2000);

    return ()=>{
        clearInterval(clearIn);
    }

  },[])


  return (
    <div>
        <h1 className='font-bold'>Live Chat</h1>
        <div>
            {
                chatMessage?.map((item,index)=>{
                    return <ChatMessage key={index} name={item.name} message={item.message}/>
                })
            }
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>
            <ChatMessage name="Akshay Saini" message="this is namaste react live"/>

        </div>
    </div>
  )
}

export default LiveChat