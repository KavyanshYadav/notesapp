import React, { useState } from 'react'
import "./NoteCard.css"
import { motion } from "framer-motion"
import Button from '../miniComponents/Button'
import InputX from '../miniComponents/InputX'
import { FcLock } from 'react-icons/fc'
import { IoCloseSharp } from "react-icons/io5";



function NoteCard({type="Note"}) {
  
  const [OpenModel,setOpenModel] = useState(false)



  if(type=="create"){
    return(
      <motion.div className={OpenModel?"NoteModel":"NoteCardC"}  onClick={()=>{if(OpenModel==false){setOpenModel(true)}}} style={{Bac:"red"}} layout={true} >
        
        <p>crete new doc</p>
        {OpenModel? <div className='modelC'>
          <div className="containLeft">
            <p>create new doc</p>
          </div>
          <div className="containerright">
          <h1>names</h1>
          <InputX placeholder='Name'/>
          <div className="closeButtonC">

          <Button  type="icon" IconComponent={IoCloseSharp} onClick={()=>{setOpenModel(false)}}/>
          </div>
          </div>

        </div>:<span></span>}
        </motion.div>
    )
  }
  else{

    return (
      <motion.div className='NoteCardC' layout={true} whileHover={{ scale: 1.1 }}>
          <div className="imageC">
  
          </div>
          <div className="detailC">
              <h4>Name</h4>
              <p>created</p>
          </div>
      </motion.div>
    )
  }


}

export default NoteCard