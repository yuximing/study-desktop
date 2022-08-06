import Stickies from './Components/Stickies';
import Test from './Components/Test';
import NoteContainer from './Components/Stickies/NoteContainer';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
function App() {
  // const [notes, setNotes] = useState([
  //   {
  //     id: nanoid(),
  //     text: 'first note',
  //     time: '2022/05/08',
  //   },
  //   {
  //     id: nanoid(),
  //     text: '2nd note',
  //     time: Date.now(),
  //   },
  //   {
  //     id: nanoid(),
  //     text: '3rd note',
  //     time: Date.now(),
  //   },
  // ]);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('sticky-notes')) || []
  );
  // for the add button in the child component to be able to
  // update the notes param in this parent component,
  // PASS a func from the parent, which allows the child to
  // update the state
  const addNote = () => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: nanoid(),
      text: '',
      time: Date.now(),
    });
    console.log(tempNotes);
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    // console.log(notes);
    // const newNotes = notes.filter((note) => note.id !== id);
    // console.log(newNotes);

    // setNotes(newNotes);
    // console.log(notes);
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((note) => note.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);

    console.log(tempNotes);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((note) => note.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);
  return (
    <div className='App'>
      <NoteContainer
        notes={notes}
        handleAddClick={addNote}
        handleDeleteClick={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
