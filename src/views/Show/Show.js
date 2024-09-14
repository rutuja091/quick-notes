import React, { useState, useEffect } from 'react';
import "./Show.css";
import HomeButton from '../../components/HomeButton/HomeButton';
import NoteCard from "../../components/NoteCard/NoteCard";

function Show() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from localStorage when component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Function to delete a note based on index
  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));  // Update localStorage
  };

  return (
    <div>
      <h1 className='text-center text-primary '>📖 Show Notes</h1>
      <div className='notes-containers'>
        {notes.map((note, index) => {
          const { title, description, category, emoji } = note;
          return (
            <NoteCard
              key={index}
              index={index}
              title={title}
              description={description}
              category={category}
              emoji={emoji}
              deleteNote={deleteNote} // Pass delete function as prop
            />
          );
        })}
      </div>
      <HomeButton />
    </div>
  );
}

export default Show;
