import React, { useRef, useState } from 'react'
import "./InpuutX.css"

function InputX({Callback,inputref,width,padding,placeholder="",type="email"}) {
    
    const [value,setvalue]=useState("")

  
  return (
        <input
       
        className='InputX' type={type} ref={inputref}  placeholder={placeholder}></input>
  )
}

export default InputX