import React from 'react'
import "./NoteCard.css"
import { motion } from "framer-motion"

function NoteCard() {
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

export default NoteCard