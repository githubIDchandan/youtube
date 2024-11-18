import React from 'react'
import { Sidebar } from './Sidebar'
import { MainContainer } from './MainContainer'
import Header from './Header'
import { useSelector } from 'react-redux'


export const Body = () => {
 
  const menuBtn=useSelector((store)=>store.menu.menuBtn)
  // console.log(menuBtn)

  return (
    <div className='flex'>
      {menuBtn&& <Sidebar/>}
        <div className="w-full">
          <Header/>
          <MainContainer/>
      </div>
       
    </div>
  )
}
