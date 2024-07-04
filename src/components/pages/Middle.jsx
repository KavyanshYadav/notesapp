import React from 'react'
import "./Middle.css"
import NoteCard from '../MegaComponents/NoteCard'
import { motion } from "framer-motion"

function Middle() {

    let arr =[1,3,4,5,5,6,7,8,9]


  return (
    <div className='MiddleC'>
        <h2>Your NoteCard</h2>
        <div className="noteslistC">
        {arr.map((e)=>(<NoteCard/>))}

        </div>
    </div>
  )
}

export default Middle