import React, { useState } from 'react'
import InputX from '../miniComponents/InputX'
import Button from '../miniComponents/Button'
import { FaXTwitter } from 'react-icons/fa6'
import "./Header.css"

function Header() {

    const[hidden,sethidden] = useState(true)

    

    function name(){
        if (hidden){
            return "none"
        }
        else{
            return "flex"
        }


        
    }
    console.log(name())

  return (
    <div className='HeaderContainer'>
        <h2>name</h2>
        <div className="searchholder">

        <InputX placeholder='Search' width="400px"/>
        </div>
        <div className="iconHolder">
            <Button type="icon" IconComponent={FaXTwitter}/>
        <div className="name">
          
            <div className="dropdownC" style={{display:name(),


            }}>
                <h2>name</h2>
                <h2>name</h2>
                <h2>name</h2>
                <h2>name</h2>
            </div>
        </div>
            <Button type="icon" IconComponent={FaXTwitter} onClick={()=>sethidden(!hidden)}/>
        </div>
    </div>
  )
}

export default Header