

import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  const [videos,setVideo]=useState([]);
  const menuBtn=useSelector((store)=>store.menu.menuBtn)
  console.log(menuBtn)
  const getYoutubeVideo=async()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json=await data.json();
    // console.log(json);
    setVideo(json.items)
  }

useEffect(()=>{
     getYoutubeVideo();
},[])

  return (
    <div className={'flex flex-wrap justify-evenly relative'+(menuBtn===true?' ml-[190px]':"")}>
      {
        videos.map((item)=>{
          return <VideoCard key={item.id} video={item}/>
        })
      }
    </div>
  )
}

export default VideoContainer