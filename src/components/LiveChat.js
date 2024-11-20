
import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMesaage } from '../store/chatSlice';
import { nameGenerate, newMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMsg,setLiveMsg]=useState();
   const dispatch=useDispatch();
   const chatMessage=useSelector((store)=>store.chat.meassage);
   console.log("chat",chatMessage)
  useEffect(()=>{
  
    const clearIn=setInterval(() => {
        dispatch(addMesaage({
            name:nameGenerate(),
            message:newMessage()
        }))
    }, 2000);

    return ()=>{
        clearInterval(clearIn);
    }

  },[])


  return (
    <div >
       
        <div >
            {
                chatMessage?.map((item,index)=>{
                    return <ChatMessage key={index} name={item.name} message={item.message}/>
                })
            }
           
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMesaage({
                name:"Chandan",
                message:liveMsg
            }))
            setLiveMsg("")
        }}>
            <input value={liveMsg} onChange={(e)=>setLiveMsg(e.target.value)} type='text' className='py-1 border border-black w-3/4 ml-1 mb-1 rounded-lg'></input>
            <button className='bg-gray-200 px-4 mb-1 py-1 mx-1 border border-black rounded-lg'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat