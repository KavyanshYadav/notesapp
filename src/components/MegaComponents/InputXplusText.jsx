import React from 'react'
import InputX from '../miniComponents/InputX'

function InputXplusText({Inputprops,Text}) {
  return (
    <div>
        <p>{Text}</p>
        <InputX ></InputX>
    </div>
  )
}

export default InputXplusText