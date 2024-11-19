import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { addHandleMenu } from '../store/menuSlice';
import { Link } from 'react-router-dom';
import { cacheResult } from '../store/searchSlice';

const Header = () => {

const dispatch=useDispatch();
const menuBtn=useSelector((store)=>store.menu.menuBtn)
const [searchQuery,setSearchQuery]=useState();
const [searchResult,setSearchResult]=useState();
const [showSearch,setShowSearch]=useState(false);
const cache=useSelector((store)=>store.search)
// console.log("inp",searchQuery)
console.log("cache",cache)
// console.log("filt",cache[searchQuery])
const handleHanClick=()=>{
     dispatch(addHandleMenu());
}


useEffect(()=>{
  
  const timer= setTimeout(()=>{
    console.log("len",cache[searchQuery])
    if(cache[searchQuery]&&searchQuery){
      console.log("cacheSet",cache[searchQuery])
       setSearchResult(cache[searchQuery])
       
    }else{
      console.log("getdata")
      getdata();
    }
    
   
   },200);

   return ()=>{
      clearTimeout(timer)
   }

},[searchQuery])

const getdata=async()=>{
  console.log(searchQuery)

const data=await fetch("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+(searchQuery===undefined?"music":searchQuery));
const json=await data.json();
// console.log(json[1]);
console.log("api call")

setSearchResult(json[1]);
(searchQuery&&dispatch(cacheResult({[searchQuery]:json[1]})))
}


  return (
    <div className={' flex justify-between shadow-lg p-5 h-fit fixed z-10 bg-gray-50'+(menuBtn===true?' ml-[192px] ':' w-full ')}>
      {/* <Sidebar/> */}
      <div className='flex '>
         <img className='h-8 ml-1 cursor-pointer' alt='ham' onClick={handleHanClick} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn7mEYUDo9rDdJ3Q7FMygT7jUzFxBS8r2wTV_VzsX-Fq620MUayCcdqd91Ju-cLBYYzM&usqp=CAU'></img>
        <Link to={'/'}>
        <img className='h-8 ml-4 cursor-pointer' alt='youtube' 
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/640px-YouTube_2024.svg.png'></img>
        </Link>
         <div className='ml-20 w-[1000px] '>
         <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
          className='w-1/2  p-2 border border-gray-400 rounded-l-full'
          onFocus={()=>setShowSearch(true)}
          onBlur={()=>setShowSearch(false)}
          ></input>
         <button className='border border-gray-400  p-2 rounded-r-full'>Search</button>
         {<div className='bg-red-600 text-white  rounded-lg  fixed w-[500px] '>
         <ul >
          {showSearch&&
            searchResult?.map((item)=>{
              return <li key={item} className=' px-5 py-[2px]   text-white  my-1 hover:bg-red-700'>{"⌕ "}{item}</li>
            })
          }
          
          
         </ul>
         </div>}
          </div>
      </div>
      <div>
         <img className='h-10 mr-10 cursor-pointer' alt='loginIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxex6IB77c2H7crtcFCRR9agq0vqskhKA0g&s'></img>
      </div>
    </div>
  )
}

export default Header