import React, { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Stack,
  Textarea,
  Text,
} from '@chakra-ui/react';

const initialNoteState = {
  notes: [],
};

const notesReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newNoteState = {
        notes: [...prevState.notes, action.payload],
      };

      console.log('(inside reducer)after ADD_NOTE: ', newNoteState);
      return newNoteState;
    }
    default:
      return prevState;
  }
};

const Stickies = () => {
  // const [noteInput, setNoteInput] = useState('');
  const [noteState, dispatch] = useReducer(notesReducer, initialNoteState);
  // const notesContainer = document.getElementById('notes');
  // const addNoteBtn = document.getElementById('addBtn');

  const testText = 'testing';

  const handleClick = (event) => {
    event.preventDefault();
    // if (!noteInput) {
    //   return;
    // }
    const newNote = {
      id: uuid(),
      text: '',
    };

    // const element = document.createElement('Textarea');

    // add this note object to the note state
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  };

  // const dropNote = (event) => {
  //   // event.stopPropagation();
  //   event.preventDefault();
  //   event.target.style.left = `${event.pageX - 50}px`;
  //   event.target.style.top = `${event.pageY - 50}px`;
  // };
  // const dragOver = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  // };
  return (
    <div
    // onDragOver={dragOver}
    >
      <Heading>Stickies</Heading>
      <Button
        id='addBtn'
        onClick={handleClick}
        type='button'
        height='100px'
        width='100px'
      >
        +
      </Button>
      {testText}
      <Box
        id='notes'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, 200px)'
        padding='20px'
        gap='20px'
      >
        {testText}
        <Text>SHOULD BE HERE AHHHHH</Text>
        {/* <Textarea
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          placeholder='Create a new note...'
          height='200px'
        ></Textarea> */}
        {noteState.notes.map((note) => {
          // const elem = document.createElement('Textarea');
          // elem.value = note.text;
          // notesContainer.insertBefore(elem, addNoteBtn);
          <Textarea
            key={note.id}
            value={note.text}
            placeholder='Create a new note...'
            w='200px'
            h='200px'
            backgroundColor='yellow'
          ></Textarea>;
          <h2>im a heading</h2>;

          console.log('PRINT SMT PLZ');
        })}
      </Box>
    </div>
  );
};

export default Stickies;
