


import React from 'react'

const VideoCard = ({video}) => {
    // console.log(video)
    const {snippet,statistics}=video;
    const {thumbnails,title,channelTitle}=snippet;
    const {viewCount}=statistics
  return (
    <div className='my-1  w-64 shadow-lg'>
       <img alt='img' src={thumbnails.medium.url}></img>
       <ul>
        <li className='font-bold'>{channelTitle}</li>
        <li className='text-gray-800'>{title}</li>
        <li>Views: {viewCount}</li>
       </ul>
    </div>
  )
}

export default VideoCard