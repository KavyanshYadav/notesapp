import React, { useEffect } from 'react'
import ContainerLeft from '../components/pages/ContainerLeft'
import ContainerRight from '../components/pages/ContainerRight'
import Header from '../components/pages/Header'
import Middle from '../components/pages/Middle'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'
import { useNavigate } from 'react-router-dom'

function DashBoard() {  

  const [user,loading,error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    
    if(!user){
      navigate("/login")
    }

  }, [])
  

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      width:"100%",
      maxWidth:"100%"
      
    }}>
       <Header/>
       <Middle/>
    </div>
  )
}

export default DashBoard