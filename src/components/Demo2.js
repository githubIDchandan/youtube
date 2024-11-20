import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

    let x=0;
   const [y,SetY]=useState(0);
   const i=useRef(0);
//    let i=0;
    const ref=useRef(null);
   useEffect(()=>{
       i.current=setInterval(() => {
        console.log("setInterval",Math.floor(Math.random()*10000))
       }, 2000);

    return ()=>{
        clearInterval(i.current)
    }

   },[])

  return (
    <div className='h-96 w-96 border border-black m-5 p-2'>
          <div>
             <button className='px-5 py-2 m-2 bg-green-400 rounded-lg text-white'
                onClick={()=>{
                    x=x+1;
                    console.log(x);
                }}
             >IncreaseX</button>
             <span>Let:{x}</span>
          </div>
          <div>
             <button className='px-5 py-2 m-2 bg-green-400 rounded-lg text-white'
                onClick={()=>{
                    SetY(y+1)
                }}
             >IncreaseY</button>
             <span>State:{y}</span>
          </div>
          <div>
             <button className='px-5 py-2 m-2 bg-green-400 rounded-lg text-white'
                onClick={()=>{
                    ref.current=ref.current+1;
                    console.log(ref.current)
                }}
             >IncreaseRef</button>
             <span>Ref:{ref.current}</span>
          </div>
          <div>
            <button className='bg-red-600 text-white px-5 py-2 m-10'
              onClick={()=>{
                clearInterval(i.current)
              }}
            >Stop Printing</button>
          </div>
    </div>
  )
}

export default Demo2