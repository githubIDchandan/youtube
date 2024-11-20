import React, { useMemo, useState } from 'react'
import {findNthPrime} from "../utils/helper.js"

const Demo = () => {

  const [text,setText]=useState(0);
  const [dark,setDark]=useState(false);
  
//   const nthPrime=findNthPrime(text);
  const nthPrime=useMemo(()=>findNthPrime(text),[text]);
  


  return (
    <div>
        <h1>Demo</h1>
        <div className={'w-96 h-96 border border-black m-5 p-2'+(dark &&   ' bg-gray-800 text-white ')}>
             <button className='bg-green-800 flext text-white py-2 px-4 m-2 font-bold rounded-lg'
               onClick={()=>setDark(!dark)}
             >Toggle</button>
             <input type='number' value={text} onChange={(e)=>setText(e.target.value)} className='border border-black p-2 block my-4 mx-2'></input>
             <h2>nth Prime:{nthPrime}</h2>
        </div>
    </div>
  )
}

export default Demo