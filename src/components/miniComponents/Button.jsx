import React from 'react'
import "./Button.css"
import { FaBaby } from 'react-icons/fa'

function Button({text,type,IconComponent,onClick}) {
    function nmae(){
        console.log("name")
    }

    if (type=="icon"){
        return(
            <button className='iconButton' onClick={onClick}>
                <div style={
                    {
                        display:"flex"
                    }
                }>

                <IconComponent size={25}/>
                {text}
                </div>
            </button>
        )

    }
    else{
        
        return (
      
          <button className='ButtonX' onClick={onClick}>{text}</button>
        )
    }


}

export default Button