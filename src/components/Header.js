import React from 'react'
import { Sidebar } from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { addHandleMenu } from '../store/menuSlice';

const Header = () => {

const dispatch=useDispatch();
const menuBtn=useSelector((store)=>store.menu.menuBtn)
const handleHanClick=()=>{
     dispatch(addHandleMenu());
}


  return (
    <div className={' flex justify-between shadow-lg p-5 h-fit fixed z-10 bg-gray-50'+(menuBtn===true?' ml-[192px] ':' w-full ')}>
      {/* <Sidebar/> */}
      <div className='flex '>
         <img className='h-8 ml-1 cursor-pointer' alt='ham' onClick={handleHanClick} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn7mEYUDo9rDdJ3Q7FMygT7jUzFxBS8r2wTV_VzsX-Fq620MUayCcdqd91Ju-cLBYYzM&usqp=CAU'></img>
         <img className='h-8 ml-4 cursor-pointer' alt='youtube' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/640px-YouTube_2024.svg.png'></img>
         <div className='ml-20 w-[1000px] '>
         <input className='w-1/2  p-2 border border-gray-400 rounded-l-full'></input>
         <button className='border border-gray-400  p-2 rounded-r-full'>Search</button>
          </div>
      </div>
      <div>
         <img className='h-10 mr-10 cursor-pointer' alt='loginIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxex6IB77c2H7crtcFCRR9agq0vqskhKA0g&s'></img>
      </div>
    </div>
  )
}

export default Header