import React, { useEffect } from 'react'
import { Sidebar } from './Sidebar'
import { MainContainer } from './MainContainer'
import Header from './Header'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'


export const Body = () => {
  // const query = "music";
  // const url = `https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`;
  
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error("Error:", error));
  const menuBtn=useSelector((store)=>store.menu.menuBtn)
  // console.log(menuBtn)
  

  return (
    <div className='flex'>
      {menuBtn&& <Sidebar/>}
        <div className="w-full">
          <Header/>
          <Outlet/>
      </div>
       
    </div>
  )
}
