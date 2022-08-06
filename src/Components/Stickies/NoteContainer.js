import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import Note from './Note';
const NoteContainer = (props) => {
  return (
    <Box
      className='note-container'
      display='grid'
      gap='20px'
      gridTemplateColumns='repeat(auto-fill, 200px)'
    >
      {props.notes.map((note) => (
        <Note
          note={note}
          handleDeleteClick={props.handleDeleteClick}
          updateText={props.updateText}
        />
      ))}
      <Button
        onClick={() => {
          props.handleAddClick();
        }}
        height='20px'
        width='20px'
      >
        +
      </Button>
    </Box>
  );
};

export default NoteContainer;
