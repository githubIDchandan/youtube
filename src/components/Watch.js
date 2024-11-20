import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import CommentList from './CommentList';
import LiveChat from './LiveChat';

const Watch = () => {
    const menuBtn=useSelector((store)=>store.menu.menuBtn);
    const [search]=useSearchParams();
    const commentData=[
      {
        name:"Rakesh 1",
        comment:"It is a long established fact that a reader will be distracted by the",
        replies:[
          {
            name:"Nitin 1",
            comment:"It is a long established fact that a reader will be distracted by the",
            replies:[
              {
                name:"Raj",
                comment:"It is a long established fact that a reader will be distracted by the",
                replies:[
                  {
                    name:"Manoj",
                    comment:"It is a long established fact that a reader will be distracted by the",
                    replies:[
                      {
                        name:"Akshay",
                        comment:"It is a long established fact that a reader will be distracted by the",
                        replies:[
                          
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name:"Abhay 1",
            comment:"It is a long established fact that a reader will be distracted by the",
            replies:[
              {
                name:"Abhay 2",
                comment:"It is a long established fact that a reader will be distracted by the",
                replies:[
                  {
                    name:"Abhay 3",
                    comment:"It is a long established fact that a reader will be distracted by the",
                    replies:[
                      {
                        name:"Abhay 4",
                        comment:"It is a long established fact that a reader will be distracted by the",
                        replies:[
                          
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }, {
            name:"Nitin 3",
            comment:"It is a long established fact that a reader will be distracted by the",
            replies:[
              
            ]
          }
        ]
      },
      {
        name:"Rakesh 2",
        comment:"It is a long established fact that a reader will be distracted by the",
        replies:[
          
        ]
      },
      {
        name:"Rakesh 3",
        comment:"It is a long established fact that a reader will be distracted by the",
        replies:[
          
        ]
      }, {
        name:"Rakesh 4",
        comment:"It is a long established fact that a reader will be distracted by the",
        replies:[
          
        ]
      }
    ]
  return (
    <div className={'bg-red-600 relative  my-[85px] h-fit'+(menuBtn===true?' ml-[192px] ':' w-full ')}>
        <div className='flex '>
        <iframe 
         className='aspect-video w-[1150px]  h-[690px]'
         src={"https://www.youtube.com/embed/"+search.get('v')+"?si=rFpNHbCg7tkav5iz&autoplay=1"}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
         </iframe>
        <div >
        <h1 className='font-bold text-xl fixed z-10 text-blue-600 shadow-2xl ml-1'>Live Chat</h1>
        </div>
        <div className='w-full h-[690px] border-2 border-black bg-white flex flex-col-reverse  overflow-y-scroll'>
        
          <LiveChat/>
          
        </div>
        </div>
       <div className='flex flex-col text-white bg-red-600 w-full'>
        <h1 className='font-bold text-2xl ml-12 mt-5'>Comments: </h1>
        <CommentList comments={commentData}/>
      </div>


        </div>
  )
}

export default Watch