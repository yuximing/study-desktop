import { Box, Heading, Textarea } from '@chakra-ui/react';
import React from 'react';

const Test = () => {
  const names = ['xianxian', 'tess'];
  return (
    <div>
      <Heading>you better print smt</Heading>
      <Box>
        {names.map((name) => (
          <Textarea value={name}></Textarea>
        ))}
      </Box>
    </div>
  );
};

export default Test;
