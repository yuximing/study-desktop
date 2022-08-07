import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css';

const NoteContainer = (props) => {
  const reverseArr = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      newArr.push(arr[i]);
    }
    return newArr;
  };

  const reversedNotes = reverseArr(props.notes);
  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container-notes custom-scroll'>
        {reversedNotes?.length > 0 ? (
          reversedNotes.map((item, index) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>Add your first note!</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
