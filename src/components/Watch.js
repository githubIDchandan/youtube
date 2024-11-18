import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
    const menuBtn=useSelector((store)=>store.menu.menuBtn);
    const [search]=useSearchParams();
    console.log(    )
  return (
    <div className={'bg-red-600 relative  my-[85px] h-screen'+(menuBtn===true?' ml-[192px] ':' w-full')}>
        <iframe 
         className='aspect-video w-[1400px] h-[690px] mx-auto mt-2'
         src={"https://www.youtube.com/embed/"+search.get('v')+"?si=rFpNHbCg7tkav5iz&autoplay=1"}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
         </iframe>
        
        </div>
  )
}

export default Watch