import { Box, HStack, IconButton, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Note = (props) => {
  return (
    <Box
      className='note'
      backgroundColor='#fef68a'
      padding='0.5rem'
      minHeight='220px'
      borderRadius='10px'
      w='216px'
      display='flex'
      flexDir='column'
      justifyContent='space-between'
    >
      <Textarea
        className='note-text'
        defaultValue={props.note.text}
        onChange={(event) =>
          props.updateText(event.target.value, props.note.id)
        }
        w='200px'
        h='200px'
        border='none'
        resize='none'
        focusBorderColor='none'
      ></Textarea>
      <HStack
        className='note-footer'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Text>{props.note.time}</Text>
        <IconButton
          onClick={() => props.handleDeleteClick(props.note.id)}
          aria-label='Delete note'
          icon={<AiOutlineDelete />}
          size='sm'
          backgroundColor='#fef68a'
          outline='none'
          _focus='outline-none'
        />
      </HStack>
    </Box>
  );
};

export default Note;
