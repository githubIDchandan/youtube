import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
    console.log("cc",comments.replies)
  return (
    <div className='ml-20'>
        {
            comments.map((item)=>{
                return (
                     <div>
                    <Comment data={item}/>
                    <div className=' border-white border-l-4'>
                        <CommentList comments={item.replies}/>
                    </div>
                    </div>
                )
            })
        }

        

    </div>
  )
}

export default CommentList