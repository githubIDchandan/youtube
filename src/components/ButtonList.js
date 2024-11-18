import React from 'react'
import { Button } from './Button';
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const menuBtn=useSelector((store)=>store.menu.menuBtn)
  const list=["All","Cricket","Fashion","Live","News","Movies","Gamming","Playlist","Motivation","Mixes","Music"];

  return (
    <div className={'flex mx-[30px] relative mt-[90px]'+(menuBtn===true?' ml-[190px]':"")}>
      {
        list.map((item)=>{
          return <Button item={item}/>
        })
      }
    </div>
  )
}

export default ButtonList