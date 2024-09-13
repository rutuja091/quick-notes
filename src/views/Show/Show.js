import React, { useState, useEffect } from 'react'
import "./Show.css"
import HomeButton from '../../components/HomeButton/HomeButton'
import NoteCard from "../../components/NoteCard/NoteCard"
function Show() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    const savednotes = JSON.parse(localStorage.getItem("notes")) ||
      [];
    setNotes(savednotes)
  }, []);

  return (
    <div>
      <h1 className='text-center text-primary '>📖Show Notes</h1>
     <div className='notes-containers'>
      {

        notes.map((note,index) => {
          const { title, description, category, emoji } = note;
          return < NoteCard
          index={index}
           title={title} 
           description={description} 
           category={category} 
           emoji={emoji} />


        })}
        </div>

      <HomeButton />
    </div>
  )
}

export default Show
