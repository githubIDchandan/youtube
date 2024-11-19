


import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
    // console.log(video)
    const {snippet,statistics}=video;
    const {thumbnails,title,channelTitle}=snippet;
    const {viewCount}=statistics
  return (
    <div className='my-1  w-64 shadow-lg '>
      <Link to={'/watch?v='+video.id}> <img alt='img' className='cursor-pointer' src={thumbnails.medium.url}></img></Link>
       <ul>
        <li className='font-bold'>{channelTitle}</li>
        <li className='text-gray-800'>{title}</li>
        <li>Views: {viewCount}</li>
       </ul>
    </div>
  )
}


export const AdVideoCard=({info})=>{
  // console.log("info",info)
  return(
    <div className='m-1 p-1 bg-red-600 text-white rounded-lg border border-red-900'>
      <p className='font-bold'>Popular</p>
      <VideoCard video={info}/>
    </div>
  )
}


export default VideoCard