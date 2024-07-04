import React, { useEffect } from 'react'
import ContainerLeft from '../components/pages/ContainerLeft'
import ContainerRight from '../components/pages/ContainerRight'
import "./Login.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../services/firebase';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const[user,loading,error] = useAuthState(auth)
  useEffect(() => {
    
    
    if(user){
      navigate("/")
    }
  
    
  }, [user])
  

  return (
    <div className='nm'>
       <ContainerLeft/>
       <ContainerRight/>
    </div>
  )
}

export default Login