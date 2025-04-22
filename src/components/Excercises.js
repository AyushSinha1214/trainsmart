import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination, formControlClasses } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';


const Excercises = ({excercises, setExercises, bodyPart}) => {
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px'}}}
      mt = '50px'
      p = '20px'
    >
      <Typography variant='h3' mb='46px '>
        showing result
      </Typography>
      <Stack direction="row " sx={{ gap:{ lg:'110px', xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {}
      </Stack>
    </Box>
  )
}

export default Excercises