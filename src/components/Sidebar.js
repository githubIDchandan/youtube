import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
  const menuBtn=useSelector((store)=>store.menu.menuBtn)
  return (
    <div className={'shadow-lg bg-black text-white w-48 h-screen transition-all '+(menuBtn===false?'':'fixed')}>
      <ul className='pt-1'>
        <li className='pt-1'>Home</li>
        <li className='pt-1'>Shorts</li>
        <li className='pt-1'>Subscription</li>
      </ul>
      <h1 className='font-bold text-xl pt-5'>Subscription</h1>
      <ul className='pt-1'>
        <li className='pt-1'>Gaming</li>
        <li className='pt-1'>Shopping</li>
        <li className='pt-1'>Music</li>
        <li className='pt-1'>Movie</li>
      </ul>
      <h1 className='font-bold text-xl pt-5'>Subscription</h1>
      <ul className='pt-1'>
        <li className='pt-1'>Gaming</li>
        <li className='pt-1'>Shopping</li>
        <li className='pt-1'>Music</li>
        <li className='pt-1'>Movie</li>
      </ul>
      <h1 className='font-bold text-xl pt-5'>Explore</h1>
      <ul className='pt-1'>
        <li className='pt-1'>News</li>
        <li className='pt-1'>Sports</li>
        <li className='pt-1'>Course</li>
        <li className='pt-1'>Fashion & Beauty</li>
      </ul>
      <h1 className='font-bold text-xl pt-5'>Trending</h1>
      <ul className='pt-1'>
        <li className='pt-1'>Now</li>
        <li className='pt-1'>Music</li>
        <li className='pt-1'>Gaming</li>
        <li className='pt-1'>Movie</li>
      </ul>
    </div>
  )
}
