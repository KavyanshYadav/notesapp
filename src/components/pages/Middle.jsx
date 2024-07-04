import React, { useState ,useEffect} from 'react'
import "./Middle.css"
import NoteCard from '../MegaComponents/NoteCard'
import { motion } from "framer-motion"
import { getNotes } from '../../services/firebase'

function Middle() {
  const [notes,setnotes]=useState([1])
    useEffect(() => {
      async function name(){
        const fetchedNotes = await getNotes();
        setnotes(fetchedNotes);
        console.log(fetchedNotes)
      }
      name()
      
     

    }, [])

    function CreateCard(){
      return(
        <div>

        </div>
      )
    }
    
    const arr=[]

  return (
    <div className='MiddleC'>
        <h2>Your NoteCard</h2>
        <div className="noteslistC">

          <NoteCard type='create'/>

          {notes && notes.length>0?(
            notes.map((e)=>(<NoteCard/>))):(<p>not available</p>)}

        </div>
    </div>
  )
}

export default Middle