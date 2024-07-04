import React from 'react'
import ContainerLeft from '../components/pages/ContainerLeft'
import ContainerRight from '../components/pages/ContainerRight'
import Header from '../components/pages/Header'
import Middle from '../components/pages/Middle'

function DashBoard() {  
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