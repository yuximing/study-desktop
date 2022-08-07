import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('study-desktop-app')) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: nanoid(),
      text: '',
      time: Date.now(),
      color: color,
    });
    setNotes(tempNotes);
    // after setNotes, still cannot console.log the correct notes list
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;

    setNotes(tempNotes);
  };
  useEffect(() => {
    localStorage.setItem('study-desktop-app', JSON.stringify(notes), [notes]);
  });

  return (
    <div className='App'>
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
