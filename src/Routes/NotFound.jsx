import React from 'react'
import Button from '../components/miniComponents/Button'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navi = useNavigate();
  return (
    <div>
        <h1>Route not FOUND!!</h1>
        <Button text="Return to DashBoard" onClick={()=>{navi("/")}}/>
        
    </div>
  )
}

export default NotFound