import React, { useState } from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExcercies from '../components/SearchExcercies';
import HeroBanner from '../components/HeroBanner';

const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return (
        <Box>
            <HeroBanner />
            <SearchExcercies
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
  exercises={exercises}
  setExercises={setExercises}
  bodyPart={bodyPart}
/>

        </Box>
    )
}

export default Home